// filename : arcapi/_arcapi_userme.js
// author   : CirnoBakaBOT
// date     : 04/12/2020
// comment  : userme

const TAG = 'arcapi/_arcapi_userme.js';

const arcfetch = require('../corefunc/arcfetch');
const ArcAPIRequest = arcfetch.ArcAPIRequest;

module.exports = async (account) => {
  return new Promise((reslove, reject) => {

    // construct remote request
    const _remote_request =
      new ArcAPIRequest('GET', 'user/me', {
        deviceid: account.device,
        usertoken: account.token
      });

    // send request
    arcfetch(_remote_request)
      .then((root) => {
        return reslove(root.value);
      })
      .catch((e) => { return reject(e); })
  });
}
