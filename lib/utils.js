'use strict';

const httpx = require('httpx');

exports.request = async function (url) {
  const res = await httpx.request(url, { timeout: 60 * 1000 });
  const data = await httpx.read(res);
  try {
    return JSON.parse(data.toString());
  } catch (err) {
    return data.toString();
  }
};