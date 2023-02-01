<template>
  <main>
    <Navbar />
    <Checkout class="lg:w-[30%] lg:hidden" />
    <section class="pt-10">
      <p class="text-3xl font-bold text-center">Transactions Detail</p>
      <div v-if="!transactionsByIdData.isError">
        <p class="text-2xl font-semibold text-center mt-2">
          {{ transactionsByIdData.data.name }}
        </p>
        <div class="flex justify-center mt-2">
          <img src="https://placeimg.com/192/192/people" class="rounded-full" />
        </div>
        <div class="mt-3">
          <p class="text-xl text-center">History Transactions</p>
          <div class="flex justify-center">
            <table class="mt-3 w-screen">
              <tr>
                <th class="border-2 text-xs sm:text-sm text-center lg:text-xl">
                  No.
                </th>
                <th
                  class="border-2 min-w-[100px] text-xs sm:text-sm lg:text-xl"
                >
                  Name
                </th>
                <th class="border-2 text-xs sm:text-sm lg:text-xl">Total</th>
                <th class="border-2 text-xs sm:text-sm lg:text-xl">Date</th>
              </tr>
              <tr
                v-for="(data, idx) in transactionsByIdData.data.transactions"
                :key="idx"
              >
                <td class="border-2 text-xs sm:text-sm text-center lg:text-xl">
                  {{ idx + 1 }}
                </td>
                <td class="border-2 text-xs sm:text-sm text-center lg:text-xl">
                  {{ transactionsByIdData.data.name }}
                </td>
                <td class="border-2 text-xs text-center lg:text-xl">
                  Rp. {{ formatRupiah(data.total) }}
                </td>
                <td class="border-2 text-xs text-center lg:text-xl">
                  {{ onDate(data.date) }}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from "../components/molecules/Navbar.vue";
import Checkout from "../components/molecules/Checkout.vue";

import formatRupiah from "../modules/helpers/formatRupiah";
import moment from "moment";

import { mapActions, mapState } from "pinia";
import { transactions } from "../stores/transactions";

export default {
  name: "TransactionsDetail",
  components: { Navbar, Checkout },
  mounted() {
    this.fetchTransactionsById(parseInt(this.$route.params.id)).catch((err) => {
      if (err) {
        this.$router.back();
      }
    });
  },
  computed: {
    ...mapState(transactions, {
      transactionsByIdData: "transactionsByIdData",
    }),
  },
  methods: {
    formatRupiah,
    moment,
    ...mapActions(transactions, {
      fetchTransactionsById: "fetchTransactionsById",
    }),
    onDate(date) {
      if (window.innerWidth >= 768) {
        return moment(date).format("MMMM Do YYYY, h:mm:ss a");
      } else {
        return moment(date).subtract(10, "days").calendar();
      }
    },
  },
};
</script>
