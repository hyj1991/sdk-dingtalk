'use strict';

const { request } = require('../utils');

function getAlarmMessage() {
  return `* CPP: No data`;
}

exports.getDownloadInfo = async function () {
  return getAlarmMessage();
};