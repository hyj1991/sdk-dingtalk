'use strict';

const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;
const readdir = promisify(fs.readdir);
const Bot = require('dingbot');

exports.start = async function (accessToken) {
  const langPath = path.join(__dirname, './langs');
  const langs = await readdir(langPath);
  const data = await Promise.all(langs.map(lang => require(path.join(langPath, lang)).getDownloadInfo()));
  const bot = new Bot(`https://oapi.dingtalk.com/robot/send?access_token=${accessToken}`);
  bot.markdown('SDK Downloads',
    `#### SDK Downloads:\n\n${data.join('\n')}`)
    .then((data) => {
      if (data.errmsg === 'ok') {
        console.log('success');
      } else {
        console.log(`failed: ${data.errmsg}`);
      }
    });
};