// components/bill-fee-list/bill-fee-list.js
Component({

  properties: {
    data: {
      type: Array,
      value: [],
    }
  },


  methods: {
    onItemTap(e) {
      this.triggerEvent('onItemTap', { code: e.detail.code });
    }
  },

})
