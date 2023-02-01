<template>
  <div
    class="border-2 rounded-lg h-20 p-2 flex items-center mb-2 justify-between"
  >
    <img :src="payload.picture" class="w-12" />
    <div class="w-[70%] border-l-2 pl-2">
      <p class="text-xs">{{ payload.name }}</p>
      <p class="text-xs">Total : Rp. {{ formatRupiah(payload.price) }}</p>
    </div>
    <p class="relative bottom-5 cursor-pointer" @click="deleteHandler">x</p>
  </div>
</template>

<script>
import formatRupiah from "../../modules/helpers/formatRupiah";
import { mapActions } from "pinia";
import { checkout } from "../../stores/checkout";
export default {
  name: "CheckoutCardComponent",
  methods: {
    formatRupiah,
    ...mapActions(checkout, {
      deleteOrder: "deleteOrder",
    }),
    deleteHandler() {
      this.deleteOrder(this.payload);
    },
  },
  props: {
    payload: {
      type: Object,
      required: true,
    },
  },
};
</script>
