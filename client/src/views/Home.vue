<template>
  <main>
    <Navbar class="z-10" />
    <section>
      <Checkout class="lg:w-[30%]" />
      <Product class="lg:w-[70%] p-5 lg:p-10" />
    </section>
  </main>
</template>

<script>
import { user } from "../stores/users";
import { mapActions } from "pinia";

import Navbar from "../components/molecules/Navbar.vue";
import Checkout from "../components/molecules/Checkout.vue";
import Product from "../components/molecules/Product.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Checkout,
    Product,
  },
  computed: {},
  mounted() {
    this.FetchListUser();
  },
  methods: {
    ...mapActions(user, {
      FetchListUser: "FetchListUser",
    }),
  },
};
</script>
