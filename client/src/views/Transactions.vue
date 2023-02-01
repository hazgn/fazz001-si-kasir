<template>
  <main>
    <Navbar />
    <section class="p-10">
      <Checkout class="lg:w-[30%] lg:hidden" />

      <p class="text-3xl font-bold text-center">Transactions</p>

      <div class="pt-5 md:grid grid-cols-4">
        <TransactionsCard
          v-for="(data, idx) in listTransactionsData.data"
          :key="idx"
          :payload="data"
          class="mb-12"
        />
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from "../components/molecules/Navbar.vue";
import TransactionsCard from "../components/molecules/TransactionsCard.vue";
import Checkout from "../components/molecules/Checkout.vue";
import { transactions } from "../stores/transactions";
import { mapState, mapActions } from "pinia";

export default {
  name: "TransactionsView",
  components: {
    Navbar,
    TransactionsCard,
    Checkout,
  },
  computed: {
    ...mapState(transactions, {
      listTransactionsData: "listTransactionsData",
    }),
  },
  mounted() {
    this.fetchListTransactions();
  },
  methods: {
    ...mapActions(transactions, {
      fetchListTransactions: "fetchListTransactions",
    }),
  },
};
</script>
