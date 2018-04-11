Page({
  data: {
    // bills: [],
    bills: [{
      title: 2018,
      data: [
        {
          expenses: Math.floor(Math.random() * 200),
          unpaid:  Math.floor(Math.random() * 2),
          mth: 5,
          selected: Math.random() > 0.5 ? true : false,
        },{
          expenses:  Math.floor(Math.random() * 200),
          unpaid:  Math.floor(Math.random() * 2),
          mth: 4,
          selected: Math.random() > 0.5 ? true : false,
        },{
          expenses:  Math.floor(Math.random() * 200),
          unpaid:  Math.floor(Math.random() * 2),
          mth: 3,
          selected: Math.random() > 0.5 ? true : false,
        },{
          expenses:  Math.floor(Math.random() * 200),
          unpaid:  Math.floor(Math.random() * 2),
          mth: 2,
          selected: Math.random() > 0.5 ? true : false,
        },{
          expenses:  Math.floor(Math.random() * 200),
          unpaid:  Math.floor(Math.random() * 2),
          mth: 1,
          selected: Math.random() > 0.5 ? true : false,
        }
      ],
    },{
      title: 2017,
      data: [
        {
          expenses:  Math.floor(Math.random() * 200),
          unpaid:  Math.floor(Math.random() * 2),
          mth: 5,
          selected: Math.random() > 0.5 ? true : false,
        },{
          expenses:  Math.floor(Math.random() * 200),
          unpaid:  Math.floor(Math.random() * 2),
          mth: 4,
          selected: Math.random() > 0.5 ? true : false,
        },{
          expenses:  Math.floor(Math.random() * 200),
          unpaid:  Math.floor(Math.random() * 2),
          mth: 3,
          selected: Math.random() > 0.5 ? true : false,
        },{
          expenses:  Math.floor(Math.random() * 200),
          unpaid:  Math.floor(Math.random() * 2),
          mth: 2,
          selected: Math.random() > 0.5 ? true : false,
        },{
          expenses:  Math.floor(Math.random() * 200),
          unpaid:  Math.floor(Math.random() * 2),
          mth: 1,
          selected: Math.random() > 0.5 ? true : false,
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
  boxChange: function(e,ew) {
    console.log(e.detail.value); 
  }
})
