
Component({
  properties: {
    title: String,
    subTitle: String,

    buttonText: String,
  },

  data: {

  },

  methods: {
    onTapButton: function() {
      this.triggerEvent('buttonevent');
    },
  }
})
