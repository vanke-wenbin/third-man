Component({
  relations: {
    '../bill-fee-list/bill-fee-list': {
      type: 'parent',
      linked: function(target) {
        // console.log('item linked', target);
      },
    },
  },
  properties: {
    data: Object,
  },

  methods: {
    onItemTapped: function() {
      if (!this.properties.data.totalUnpaid) {
        return;
      }

      const eventDetail = {
        id: this.properties.data.order_id,
      }
      this.triggerEvent('onItemClick', eventDetail);
    }
  }
})
