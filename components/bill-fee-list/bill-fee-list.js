// components/bill-fee-list/bill-fee-list.js
Component({
  relations: {
    '../bill-fee-item/bill-fee-item': {
      type: 'child',
      linked: function(target) {
        console.log('list linked', target.data);
      },
      linkChanged: function(target) {
        console.log('list linkChanged');
      },
      unlinked: function(target) {
        console.log('list unlinked');
      }
    },
  },

  properties: {
  },

  data: {
    data: [
      {
        name: '维修订单费',
        amount: '130.53',
        isPaid: false,
      },
      {
        name: '维修订单费',
        details: [
          {
            name: '日常物业服务费',
            amount: '88.88',
          },
          {
            name: '高层物业服务费',
            amount: '32.00',
          },
        ],
      }
    ],
  },

  methods: {
  },

  ready: function() {
    var nodes = this.getRelationNodes('../bill-fee-item/bill-fee-item');
    console.log(nodes);
  },
})
