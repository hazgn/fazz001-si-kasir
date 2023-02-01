import { defineStore } from "pinia";

export const hamburger = defineStore("hamburger", {
  state: () => ({
    hamburgerToggle: {
      isActive: false,
    },
  }),
  actions: {
    hamburgerCliCk() {
      this.hamburgerToggle.isActive = !this.hamburgerToggle.isActive;
    },
    hamburDefault() {
      this.hamburgerToggle.isActive = false;
    },
  },
  getters: {
    isHamburger(state) {
      return state.hamburgerToggle.isActive;
    },
  },
});
