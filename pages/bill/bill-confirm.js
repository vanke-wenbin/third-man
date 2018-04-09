Page({

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