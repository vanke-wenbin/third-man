// components/bill-card/bill-card.js
Component({
  externalClasses: ['icon-md'],
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      value: '',
    },
    disable: {
      type: Boolean,
      value: false,
    },
    checked: {
      type: Boolean,
      value: false,
    }
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
    onTap: function(e) {
      if (this.properties.disable) {
        return;
      }
      const eventDetail = {
        value: e.currentTarget.dataset.value,
      } // detail对象，提供给事件监听函数
      this.triggerEvent('onChange', eventDetail);
    }
  }
})
