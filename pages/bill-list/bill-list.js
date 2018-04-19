const timeUtils = require('../../utils/time');
const UrlUtils = require('../../utils/url.js');
const HttpHelper = require('../../helpers/http.js');
const api = require('../../constants/api');
const STATUS = require('../../constants/status');

Page({
  data: {
    date: timeUtils.formatTimestamp(Date.now(), 'YYYY-MM'),
    hasMore: true,
    bills: [],
    yearBills: {},
  },

  onLoad() {
    this.loadingBills = false;
    this.pageStatus = STATUS.DEFAULT;
  },

  onReady() {
    this.getPastBills();
  },

  onReachBottom() {
    this.getPastBills();
  },

  getPastBills() {
    if (this.loadingBills || !this.data.hasMore) {
      return;
    }
    this.loadingBills = true;
    const [year, mth] = this.data.date.split('-');
    let endDate = '';
    const beginDate = `${Number(year) - 1}-${mth}`;
    if (this.pageStatus === STATUS.DEFAULT) {
      endDate = `${Number(year) + 3}-${mth}`;
    } else {
      endDate = this.data.date;
    }

    const url = UrlUtils.getUrlWithQs(api.BILLS_LIST, {
      arrears_only: 0,
      end_date: endDate,
      begin_date: beginDate,
    });

    HttpHelper.get({
      url,
      success: data => {
        const nextDate = mth === '01' ?
          `${year - 2}-12` :
          `${year - 1}-${(mth - 1).toString().padStart(2,'0')}`;

        if (this.pageStatus === STATUS.DEFAULT) {
          this.pageStatus = STATUS.SUCCESS;
        }

        const { bis } = data;
        if (bis.length === 0) {
          this.setData({hasMore: false});
        }
        const billsTree = {};

        bis.forEach(bill => {
          const { mth } = bill;
          if (billsTree[mth]) {
            billsTree[mth].push(bill);
          } else {
            billsTree[mth] = [bill];
          }
        });

        const yearBills = Object.assign({}, this.data.yearBills);

        Object.keys(billsTree).forEach(mth => {
          const [year, month] = mth.split('-');
          const bill = {};
          bill.totalUnpaid = billsTree[mth].reduce((unpaid,v) => unpaid + v.totalUnpaid, 0);
          bill.totalExpenses = billsTree[mth].reduce((unpaid,v) => unpaid + v.totalExpenses, 0);
          bill.mth = mth;
          bill.isSelected = true;
          if (!yearBills[year]) {
            yearBills[year]=[bill];
          } else {
            yearBills[year].push(bill);
          }
        });

        const bills = this.treeToBillArr(yearBills);

        this.setData({
          date: nextDate,
          bills,
          yearBills,
        })
      },
      fail: err => {
        console.log('fail', err);
      },
      complete: () => {
        this.loadingBills = false;
      }
    });
  },

  treeToBillArr(yearBills) {
    return Object.keys(yearBills).map(key => ({
      title: key,
      data: yearBills[key],
    })).sort((a,b) => b.title - a.title);
  },

  toBillDetail(e) {
    const { detail: { mth }} = e;
    wx.navigateTo({
      url:`../index/index?mth=${mth}`
    })
  },

  onItemSelect(e) {
    const { detail: { mth }} = e;
    const yearBills = Object.assign({}, this.data.yearBills);
    const [year, month] = mth.split('-');
    yearBills[year].forEach(bill => {
      if (bill.mth === mth) {
        bill.isSelected = !bill.isSelected;
      };
    });

    const bills = this.treeToBillArr(yearBills);

    this.setData({
      bills,
      yearBills,
    });
  }


})
