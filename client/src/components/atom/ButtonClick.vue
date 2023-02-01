<template>
  <button
    class="p-2 rounded-xl"
    :class="isDisabled ? 'bg-orange-300' : 'bg-primary active:bg-orange-700'"
    @click="handler"
    :disabled="isDisabled"
  >
    <p
      class="text-white font-semibold"
      :class="
        size === 'small'
          ? 'text-sm'
          : !isDisabled && size == 'small'
          ? 'active:text-black text-sm'
          : !isDisabled
          ? 'active:text-black text-lg'
          : 'text-lg'
      "
    >
      {{ label }}
    </p>
  </button>
</template>

<script>
export default {
  name: "ButtonClickComponent",
  methods: {
    handler() {
      this.$emit("onClick", true);
    },
  },
  props: {
    label: {
      type: String,
      required: false,
      default: "Submit",
    },
    size: {
      type: String,
      required: false,
      default: "Submit",
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
