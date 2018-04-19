//获取应用实例
const timeUtils = require('../../utils/time');
const UrlUtils = require('../../utils/url.js');
const HttpHelper = require('../../helpers/http.js');
const api = require('../../constants/api');
const STATUS = require('../../constants/status');

Page({
  data: {
    houses: [],
  },

  onReady() {
    this.getHouseList();
  },

  getHouseList() {
    if (this.options.mth) {
      return;
    }

    HttpHelper.get({
      url: api.HOUSE_LIST,
      success: data => {
        this.setData({ houses: data });
      },
      fail: err => {
        console.log('getHouseList fail', err);
      }
    });
  },

  onItemTap(e) {
    const { detail: { code }} = e;
    HttpHelper.put({
      url: api.CHANGE_HOUSE,
      data: {
        house_code: code,
      },
      success: data => {
        wx.reLaunch({
          url: '../index/index'
        });
      },
      fail: err => {
        console.log('CHANGE_HOUSE fail', err);
      }
    });


  }
})
