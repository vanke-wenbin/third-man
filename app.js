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
        this.getFdToken();
      }
    });

    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       const code = wx.getStorageSync('code');
    //       this.getFdToken(code);
    //     }
    //   }
    // })
  },
  getFdToken: function () {
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
            console.log('success', data);
          },
          fail: err => {
            console.log('err', err);
          }
        });
      }
    });
  },
  globalData: {
    userInfo: null
  }
})
