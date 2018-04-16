const user = require('./modules/user/user.js');
const HttpHelper = require('./helpers/http.js');
const api = require('./constants/api');
const UrlUtils = require('./utils/url.js');

//app.js
App({
  onLaunch: function () {
    wx.login({
      success: res => {
        wx.setStorageSync('code', res.code);
        this.getFdTokenWithCode();
      },
    });
  },
  getFdTokenWithCode() {
    const code = wx.getStorageSync('code');

    const url = UrlUtils.getUrlWithQs(api.LOGIN, {
      code,
      provider: 'miniprogram',
    });
    HttpHelper.get({
      url,
      responseCode: 200,
      success: data => {
        this.getFdTokenSucc(data);
      },
      fail: err => {
        this.getFdTokenWithInfo();
      }
    });
  },
  getFdTokenWithInfo: function () {
    const code = wx.getStorageSync('code');

    wx.getUserInfo({
      withCredentials: true,
      success: res => {
        const { encryptedData, iv } = res;
        const url = UrlUtils.getUrlWithQs(api.LOGIN, {
          code,
          iv,
          provider: 'miniprogram',
          encrypted_data: encryptedData,
        });
        HttpHelper.get({
          url,
          responseCode: 200,
          success: data => {
            this.getFdTokenSucc(data);
          },
        });
      },
      fail(err) {
      }
    });
  },
  getFdTokenSucc(data) {
    wx.setStorageSync('token', data.access_token);
  },
  globalData: {
    userInfo: null
  }
})
