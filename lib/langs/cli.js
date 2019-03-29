'use strict';

const { request } = require('../utils');

function getAlarmMessage() {
  return `* CLI: No data`;
}

exports.getDownloadInfo = async function () {
  return getAlarmMessage();
};