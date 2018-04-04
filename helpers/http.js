const { HOST } = require('../constants/host.js');

const token = '';

function encapsulateHeaders(headers) {
  return headers;
}

function handleSuccessCallback(data, statusCode, header) {
  const { code, error, result, ...args } = data;
  const { success, fail } = this;
  if (code === 0) {
    success && success(result, data);
  } else {
    fail && fail(error, data);
  }
}

function handleFailCallback(resp) {
  this.fail && this.fail(resp);
}

function request(options) {
  const {
    url,
    header,
    ...restOptions,
  } = options;

  const nextOptions = Object.assign({}, {
    url: `${HOST}${url}`,
    success: handleSuccessCallback.bind(options),
    fail: handleFailCallback.bind(options),
    ...restOptions,
  });

  wx.request(nextOptions);
}

module.exports = {
  get(options) {
    request(Object.assign({}, {
      method: 'GET',
    }, options));
  },

  post(options) {
    request(Object.assign({}, {
      method: 'POST',
    }, options));
  },

  request,
};
