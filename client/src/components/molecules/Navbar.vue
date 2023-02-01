<template>
  <header
    class="sticky bg-primary top-0 p-[16px] lg:px-10 lg:pt-7 lg:pb-7 shadow-lg"
  >
    <div class="flex justify-between items-center w-full">
      <div>
        <p class="text-white text-sm md:text-2xl font-bold">FAZZ001 KASIR</p>
      </div>
      <div
        class="w-48 lg:w-56 flex justify-between items-center cursor-pointer"
      >
        <p
          @click="toHome"
          class="text-white font-semibold hover:text-black text-sm lg:text-lg"
        >
          Home
        </p>
        <p
          @click="toTransactions"
          class="text-white font-semibold hover:text-black text-sm lg:text-lg"
        >
          Transactions
        </p>
        <div>
          <Hamburger @onClick="hamburgerHandler" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { hamburger } from "../../stores/hamburger";
import { mapActions } from "pinia";
import Hamburger from "../atom/Hamburger.vue";

export default {
  name: "NavbarComponent",
  components: {
    Hamburger,
  },
  computed: {},
  methods: {
    ...mapActions(hamburger, {
      hamburgerCliCk: "hamburgerCliCk",
    }),
    ...mapActions(hamburger, {
      hamburDefault: "hamburDefault",
    }),
    hamburgerHandler() {
      this.hamburgerCliCk();
    },
    hamburDefaultHandler() {
      this.hamburDefault();
    },
    toHome() {
      this.hamburDefaultHandler();
      if (window.innerWidth <= 1024) {
        setTimeout(() => {
          this.$router.push("/");
        }, 300);
      } else {
        this.$router.push("/");
      }
    },
    toTransactions() {
      this.hamburDefaultHandler();
      if (window.innerWidth <= 1024) {
        setTimeout(() => {
          this.$router.push("/transactions");
        }, 300);
      } else {
        this.$router.push("/transactions");
      }
    },
  },
};
</script>
