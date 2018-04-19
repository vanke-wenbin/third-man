Component({
  properties: {
    label: String,
    totalExpenses: String,
    totalUnpaid: String,
    isSelected: Boolean,
    mth: String,
  },

  data: {
  },

  methods: {
    onItemTapped() {
      if (!this.properties.totalUnpaid || this.properties.totalUnpaid === '0') {
        return;
      }

      const eventDetail = {
        mth: this.properties.mth,
      };
      this.triggerEvent('onItemSelect', eventDetail);
    },

    onToBillDetail() {
      const eventDetail = {
        mth: this.properties.mth,
      };
      this.triggerEvent('toBillDetail', eventDetail);
    }
  }
})
