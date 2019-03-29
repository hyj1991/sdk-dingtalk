'use strict';

const { JSDOM } = require('jsdom');
const { request } = require('../utils');

function getAlarmMessage(html) {
  const doc = new JSDOM(html).window.document;
  let data = doc.getElementsByClassName('list-unstyled ms-Icon-ul')[1];
  data = data.querySelectorAll('li');
  const perDay = data[2].innerHTML.replace(/[^\d]/g, '')
  const totalDownloads = data[0].innerHTML.replace(/[^\d]/g, '')
  return `* C#: Per day **${perDay}**, total downloads **${totalDownloads}**`;
}

exports.getDownloadInfo = async function () {
  const html = await request('https://www.nuget.org/packages/aliyun-net-sdk-core/');
  return getAlarmMessage(html);
};