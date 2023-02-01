import { defineStore } from "pinia";

export const checkout = defineStore("checkout", {
  state: () => ({
    listCheckout: {
      data: [],
      totalPrice: 0,
    },
  }),
  actions: {
    addOrder(payload) {
      this.listCheckout.data = [...this.listCheckout.data, payload];
      this.listCheckout.totalPrice =
        this.listCheckout.totalPrice + payload.price;
    },
    resetOrder() {
      this.listCheckout.data = [];
      this.listCheckout.totalPrice = 0;
    },
    deleteOrder(payload) {
      this.listCheckout.totalPrice =
        this.listCheckout.totalPrice - payload.price;
      this.listCheckout.data.splice(this.listCheckout.data.indexOf(payload), 1);
    },
  },
  getters: {
    listCheckoutData(state) {
      return state.listCheckout.data;
    },
    totalPriceData(state) {
      return state.listCheckout.totalPrice;
    },
  },
});
