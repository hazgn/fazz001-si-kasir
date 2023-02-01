<template>
  <div class="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-7">
    <ProductCard
      v-for="(data, idx) in productData"
      :key="idx"
      :payload="data"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import productData from "../../modules/static/product";

export default {
  name: "ProductComponent",
  data() {
    return {
      productData,
    };
  },
  components: {
    ProductCard,
  },
};
</script>
