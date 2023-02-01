<template>
  <div class="border-2 w-36 pt-2 pb-2 md:w-56 rounded-lg mb-4 shadow-lg">
    <div class="flex justify-center">
      <img :src="payload.picture" alt="avatar" class="h-24" />
    </div>
    <p class="text-center font-semibold">{{ payload.name }}</p>
    <p class="text-center text-red-800">
      Rp. {{ formatRupiah(payload.price) }}
    </p>
    <div class="flex justify-center mt-1">
      <ButtonClick
        label="Add"
        class="w-[80%]"
        size="small"
        @onClick="addHandler(payload)"
      />
    </div>
  </div>
</template>

<script>
import formatRupiah from "../../modules/helpers/formatRupiah";
import ButtonClick from "../atom/ButtonClick.vue";

import { mapActions } from "pinia";
import { checkout } from "../../stores/checkout";

export default {
  name: "ProductCardComponent",
  components: {
    ButtonClick,
  },
  methods: {
    formatRupiah,
    ...mapActions(checkout, {
      addOrder: "addOrder",
    }),
    addHandler(data) {
      this.addOrder(data);
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
