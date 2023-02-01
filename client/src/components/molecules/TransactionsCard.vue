<template>
  <div>
    <div
      class="xl:flex border-2 lg:w-[95%] h-[260px] xl:h-[150px] items-center rounded-2xl shadow-xl"
    >
      <div class="flex justify-center lg:flex-none">
        <img
          src="https://placeimg.com/192/192/people"
          class="rounded-2xl h-36 p-2"
          @error="errorImgHandler"
        />
      </div>
      <div>
        <p class="pl-1 text-sm text-center xl:text-left">
          Name : {{ payload.name }}
        </p>
        <p class="pl-1 text-sm text-center xl:text-left">
          Total : Rp. {{ formatRupiah(payload.total) }}
        </p>
        <!-- <p class="pl-1 text-sm text-center xl:text-left">
          Date : {{ moment(payload.date).format("MMM Do YY") }}
        </p> -->
        <div class="flex justify-center xl:justify-start">
          <ButtonClick
            label="Detail"
            size="small"
            class="mt-2 w-[90%]"
            @onClick="onDetail(payload.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonClick from "../atom/ButtonClick.vue";
import formatRupiah from "../../modules/helpers/formatRupiah";
// import moment from "moment";

export default {
  name: "TransactionsComponent",
  components: {
    ButtonClick,
  },
  methods: {
    // moment,
    formatRupiah,
    onDetail(id) {
      this.$router.push(`/transactions/${id}`);
    },
    errorImgHandler(e) {
      e.target.onerror = null;
      e.target.src =
        "https://i.pinimg.com/474x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg";
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
