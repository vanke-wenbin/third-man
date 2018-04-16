//index.js
//获取应用实例
const timeUtils = require('../../utils/time');
const UrlUtils = require('../../utils/url.js');
const HttpHelper = require('../../helpers/http.js');
const api = require('../../constants/api');
const STATUS = require('../../constants/status');

Page({
  data: {
    monthDetail: false,
    isEmpty: false,
    loading: STATUS.DEFAULT,
    selBills: [],
    mth: timeUtils.formatTimestamp(Date.now(), 'YYYY-MM'),
    date: 0,
    totalUnpaid:0,
    totalExpenses:0,
    totalPaid:0,
    pashUnpaid: 0,
    bills: [],
    houseName: '',

  },

  onLoad: function (option) {
    if (option.mth) {
      const [year, month] = option.mth.split('-');
      this.setData({
        monthDetail: true,
        mth: option.mth,
        date: new Date(year, month, 0).getDate(),
      });
    } else {
      const [year, month] = this.data.mth.split('-');
      this.setData({
        date: new Date(year, month, 0).getDate(),
      });
    }

  },


  onReady() {
    this.getMthBills();
    this.getHouseList();
    this.getPastBills();
  },

  getPastBills() {

    if (this.options.mth) {
      return;
    }
    const now = timeUtils.formatTimestamp(Date.now(), 'YYYY-MM');
    const [year, mth] = now.split('-');
    const url = UrlUtils.getUrlWithQs(api.BILLS_LIST, {
      arrears_only: 0,
      end_date: now,
      begin_date: `${year-1}-${mth}`,
    });

    HttpHelper.get({
      url,
      success: data => {
        this.setData({pashUnpaid: data.totalUnpaid})
      },
      fail: err => {
        console.log('fail', err);
      }
    });
  },

  getHouseList() {
    if (this.options.mth) {
      return;
    }

    HttpHelper.get({
      url: api.HOUSE_LIST,
      success: data => {
        const mainHouse = data.filter(house => house.is_main);
        const houseName = mainHouse[0] && mainHouse[0].name;
        this.setData({ houseName });
      },
      fail: err => {
        console.log('getHouseList fail', err);
      }
    });
  },

  getMthBills() {
    const url = UrlUtils.getUrlWithQs(api.BILLS_LIST, {
      arrears_only: 0,
      end_date: this.data.mth,
      begin_date: this.data.mth,
    });

    HttpHelper.get({
      url,
      success: data => {
        const { bis, totalUnpaid } = data;
        const totalPaid = bis.reduce(
          (total, bill) => total + bill.costs.reduce(
            (costsTotal, v) => costsTotal + v.paid,0
          ),
          0
         );
        const totalExpenses = (bis.reduce((total, v) => total + v.totalExpenses * 100, 0)) / 100;
        const formatBills = bis.map(bill => {
          if (bill.order_id === 0) {
            return {
              billName: '物业服务费',
              ...bill,
            }
          } else {
            return {
              billName: bill.costs[0].expenseName,
              ...bill,
            }
          }
        })

        this.setData({totalUnpaid, totalExpenses, totalPaid, bills: formatBills});
      },
      fail: err => {
        console.log('getMthBills fail', err);
      }
    });
  },

  onButtonTapped: function() {
    console.log('onButtonTapped');
  }
})
