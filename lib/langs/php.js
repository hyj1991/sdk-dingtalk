'use strict';

const { request } = require('../utils');

function getAlarmMessage(downloads) {
  downloads = downloads.package.downloads;
  return `* PHP: Daily **${downloads.daily}**, monthly **${downloads.monthly}**`;
}

exports.getDownloadInfo = async function () {
  const downloads = await request('https://packagist.org/packages/alibabacloud/client.json');
  return getAlarmMessage(downloads);
};