<template>
  <main>
    <Navbar />
    <div class="flex flex-col items-center h-[80vh] justify-center">
      <p class="text-2xl font-bold">Not Found!</p>
      <p class="cursor-pointer active:text-blue-700" @click="onBack">Go Back</p>
    </div>
  </main>
</template>

<script>
import Navbar from "../components/molecules/Navbar.vue";
export default {
  name: "NotFoundView",
  components: {
    Navbar,
  },
  methods: {
    onBack() {
      this.$router.back();
    },
  },
};
</script>
