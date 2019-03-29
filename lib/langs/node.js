'use strict';

const { request } = require('../utils');

function getAlarmMessage(downloads) {
  return `* Node.js: Last day **${downloads[0].downloads}**, last month **${downloads[1].downloads}**`;
}

exports.getDownloadInfo = async function () {
  const urls = [
    `https://api.npmjs.org/downloads/point/last-day/@alicloud/pop-core`,
    `https://api.npmjs.org/downloads/point/last-month/@alicloud/pop-core`
  ]
  const downloads = await Promise.all(urls.map(url => request(url)));
  return getAlarmMessage(downloads);
};