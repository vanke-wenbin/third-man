// components/bill-fee-list/bill-fee-list.js
Component({

  properties: {
    data:{
      type: Array,
      value: []
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
