const { HOST } = require('../constants/host.js');



function encapsulateHeaders(headers) {
  const token = wx.getStorageSync('token');

  if (token) {
    return Object.assign({}, headers, {
      Authorization: `Bearer ${token}`
    })
  }
  return headers;
}

function handleSuccessCallback(data, statusCode, header) {

  const { data: { code, error, result, message }, ...args } = data;
  const { success, fail } = this;
  const responseCode = this.responseCode || 0;
  if (code === responseCode) {
    success && success(result, data);
  } else {
    wx.showToast({
      title: message|| '请求失败',
      icon: 'none',
      duration: 2000
    });
    fail && fail({error, result, message}, data);
  }
}

function handleFailCallback(resp) {
  this.fail && this.fail(resp);
}

function handleCompleteCallback() {
  wx.hideLoading();
  const { complete } = this;
  if (this.complete) {
    this.complete();
  }
}

function request(options) {
  const {
    url,
    header,
    success,
    fail,
    complete,
    ...restOptions,
  } = options;

  const nextOptions = Object.assign({}, {
    url: `${HOST}${url}`,
    success: handleSuccessCallback.bind(options),
    fail: handleFailCallback.bind(options),
    complete: handleCompleteCallback.bind(options),
    header: encapsulateHeaders(header),
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
