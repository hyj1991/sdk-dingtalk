'use strict';

const { request } = require('../utils');

function getAlarmMessage() {
  return `* Java: No data`;
}

exports.getDownloadInfo = async function () {
  return getAlarmMessage();
};