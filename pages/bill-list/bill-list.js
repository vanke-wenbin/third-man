Page({
  data: {
    bills: [{
      title: 2018,
      data: [
        {
          expenses: 754.23,
          unpaid: 233,
          mth: 5,
        },{
          expenses: 754.23,
          unpaid: 233,
          mth: 4,
        },{
          expenses: 754.23,
          unpaid: 233,
          mth: 3,
        },{
          expenses: 754.23,
          unpaid: 233,
          mth: 2,
        },{
          expenses: 754.23,
          unpaid: 233,
          mth: 1,
        }
      ],
    },{
      title: 2017,
      data: [
        {
          expenses: 754.23,
          unpaid: 233,
          mth: 5,
        },{
          expenses: 754.23,
          unpaid: 233,
          mth: 4,
        },{
          expenses: 754.23,
          unpaid: 233,
          mth: 3,
        },{
          expenses: 754.23,
          unpaid: 233,
          mth: 2,
        },{
          expenses: 754.23,
          unpaid: 233,
          mth: 1,
        }
      ],
    }]
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '',
    });
  },

  onPay: function() {
    wx.showModal({
      title: '请确认缴费房屋信息',
      content: '深圳金域华府五期三栋 30G',
      showCancel: true,
      cancelText: '需要帮助',
      cancelColor: '#454545',
      confirmText: '确认',
      confirmColor: '#ef7c79',
    });
  },
})
