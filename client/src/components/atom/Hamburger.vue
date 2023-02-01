<template>
  <button
    class="lg:hidden top-[3px] relative"
    :class="{ 'hamburger-active': isHamburger }"
    @click="hamburgerHandle"
  >
    <span
      class="hamburger-line origin-top-left transition duration-300 ease-in-out"
    ></span>
    <span class="hamburger-line transition duration-300 ease-in-out"></span>
    <span
      class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"
    ></span>
  </button>
</template>

<script>
import { mapState } from "pinia";
import { hamburger } from "../../stores/hamburger";

export default {
  name: "HamburgerComponent",
  computed: {
    ...mapState(hamburger, {
      isHamburger: "isHamburger",
    }),
  },
  methods: {
    hamburgerHandle() {
      this.$emit("onClick", true);
    },
  },
};
</script>
