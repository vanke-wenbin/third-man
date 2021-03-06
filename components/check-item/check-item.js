// components/check-item/check-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    checkBoxValue: {
      type: String,
      value: '',
    },
    disable: {
      type: Boolean,
      value: false,
    },
    select: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    boxChange: function(e) {
      const eventDetail = {
        value: e.detail.value,
      } // detail对象，提供给事件监听函数
      this.triggerEvent('boxChange', eventDetail);
    }
  }
})
