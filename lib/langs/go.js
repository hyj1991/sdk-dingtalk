'use strict';

const { request } = require('../utils');

function getAlarmMessage() {
  return `* GO: No data`;
}

exports.getDownloadInfo = async function () {
  return getAlarmMessage();
};