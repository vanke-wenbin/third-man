// components/bill-fee-list/bill-fee-list.js
Component({

  properties: {
    data:{
      type: Object,
      value: {
        identity: 0,
      }
    }
  },

  methods: {
    onItemTap(e) {
      const eventDetail = {
        code: e.currentTarget.dataset.code,
      };

      this.triggerEvent('onItemTap', eventDetail);
    }
  },
})
