Component({
  relations: {
    '../bill-fee-list/bill-fee-list': {
      type: 'parent',
      linked: function(target) {
        console.log('item linked', target);
      },
    },
  },
  properties: {
    checked: Boolean,
    data: Object,
  },

  data: {
  },

  methods: {
    onItemTapped: function() {
      console.log(123);
      this.setData({
        checked: true,
      })
    }
  }
})
