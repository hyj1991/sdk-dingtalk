'use strict';

const { request } = require('../utils');

function getAlarmMessage(downloads) {
  let lastDay = 0;
  let lastMonth = 0;
  for (let i = 0; i < downloads.length; i++) {
    lastDay += downloads[i].data.last_day;
    lastMonth += downloads[i].data.last_month;
  }
  return `* Python: Last day **${lastDay}**, last month **${lastMonth}**`;
}

exports.getDownloadInfo = async function () {
  const sdks = ['aliyun-python-sdk-core', 'aliyun-python-sdk-core-v3'];
  const urls = sdks.map(sdk => `https://pypistats.org/api/packages/${sdk}/recent`);
  const downloads = await Promise.all(urls.map(url => request(url)));
  return getAlarmMessage(downloads);
};