<template>
  <div
    :class="{ 'checkout-active': isHamburger }"
    class="fixed overflow-auto bottom-0 p-5 bg-white transition-all -right-full shadow-md top-14 duration-700 w-full lg:right-0 lg:top-[87px]"
  >
    <select
      class="bg-slate-100 w-full p-3 text-slate-500 rounded-lg cursor-pointer"
      @change="selectUserHandler($event)"
      :value="userId"
    >
      <option value="" disabled selected>Select Users</option>
      <option
        :value="data.id"
        v-for="(data, idx) in listUserData.data"
        :key="idx"
      >
        {{ data.name }}
      </option>
    </select>

    <div class="min-h-[69%] p-2 pt-3">
      <CheckoutCard
        v-for="(data, idx) in listCheckoutData"
        :payload="data"
        :key="idx"
      />
    </div>

    <p class="mb-2">Total Payment : Rp. {{ formatRupiah(totalPriceData) }}</p>

    <ButtonClick
      label="Checkout"
      class="w-full"
      :isDisabled="userId !== '' && totalPriceData !== 0 ? false : true"
      @onClick="chackoutHandler"
    />
    <p class="text-center mt-1 font-semibold text-blue-800">
      <span class="cursor-pointer active:text-orange-800" @click="cancelHandler"
        >Cancel</span
      >
    </p>
  </div>
</template>

<script>
import ButtonClick from "../atom/ButtonClick.vue";
import CheckoutCard from "./CheckoutCard.vue";
import formatRupiah from "../../modules/helpers/formatRupiah";
import Swal from "sweetalert2";

import { mapState, mapActions } from "pinia";

import { hamburger } from "../../stores/hamburger";
import { user } from "../../stores/users";
import { checkout } from "../../stores/checkout";
import { transactions } from "../../stores/transactions";

export default {
  name: "CheckoutComponent",
  data() {
    return {
      userId: "",
    };
  },
  components: {
    ButtonClick,
    CheckoutCard,
  },
  computed: {
    ...mapState(hamburger, {
      isHamburger: "isHamburger",
    }),
    ...mapState(user, {
      listUserData: "listUserData",
    }),
    ...mapState(checkout, {
      listCheckoutData: "listCheckoutData",
      totalPriceData: "totalPriceData",
    }),
  },
  methods: {
    formatRupiah,
    ...mapActions(checkout, {
      resetOrder: "resetOrder",
    }),
    ...mapActions(transactions, {
      paymentTransactions: "paymentTransactions",
    }),
    selectUserHandler(e) {
      this.userId = e.target.value;
    },
    cancelHandler() {
      this.resetOrder();
    },
    chackoutHandler() {
      this.paymentTransactions(this.userId, this.totalPriceData)
        .then((res) => {
          const name = res.data.result.data.name;
          const message = res.data.result.message;
          const total = res.data.result.data.total;
          Swal.fire({
            title: message,
            text: `${name} total : Rp. ${this.formatRupiah(total)}`,
            icon: "success",
          });
          setTimeout(() => {
            this.resetOrder();
            this.$router.push(`/transactions/${this.userId}`);
          }, 3000);
        })
        .catch((err) => {
          Swal.fire({
            title: "Error?",
            text: err.response.data.error,
            icon: "error",
          });
        });
    },
  },
};
</script>
