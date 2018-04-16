// components/bill-fee-list/bill-fee-list.js
Component({
  relations: {
    '../bill-fee-item/bill-fee-item': {
      type: 'child',
      linked: function(target) {
        // console.log('list linked', target.data);
      },
      linkChanged: function(target) {
        // console.log('list linkChanged');
      },
      unlinked: function(target) {
        // console.log('list unlinked');
      }
    },
  },

  properties: {
    data: Array,
  },

  data: {
  },

  methods: {
    handleItemClick(e) {
      this.triggerEvent('onItemClick', { id: e.detail.id });
    }
  },

  ready: function() {
    var nodes = this.getRelationNodes('../bill-fee-item/bill-fee-item');
    // console.log(nodes);
  },
})
