import { defineStore } from "pinia";
import {
  fetchAllTransactions,
  fetchTransactionsById,
  PostTransactionsPayment,
} from "../modules/utils/transactions";

export const transactions = defineStore("transactions", {
  state: () => ({
    listTransactions: {
      data: [],
      isLoading: false,
      isError: false,
      errorMessage: "",
    },
    transactionById: {
      data: {},
      isLoading: false,
      isError: false,
      errorMessage: "",
    },
  }),
  actions: {
    async fetchListTransactions() {
      this.listTransactions.isLoading = true;
      try {
        const response = await fetchAllTransactions();
        this.listTransactions.isLoading = false;
        this.listTransactions.isError = false;
        this.listTransactions.data = response.data.result;
        return response;
      } catch ({ ...error }) {
        this.listTransactions.isLoading = false;
        this.listTransactions.isError = true;
        this.listTransactions.errorMessage = "Internal Server Error";
        throw error;
      }
    },
    async fetchTransactionsById(id) {
      this.transactionById.isLoading = true;
      try {
        const response = await fetchTransactionsById(id);
        this.transactionById.isLoading = false;
        this.transactionById.isError = false;
        this.transactionById.data = response.data.result;
      } catch ({ ...error }) {
        this.transactionById.isLoading = false;
        this.transactionById.isError = true;
        throw error;
      }
    },
    paymentTransactions(id, price) {
      const body = { price };
      return PostTransactionsPayment(id, body);
    },
  },
  getters: {
    listTransactionsData(state) {
      return state.listTransactions;
    },
    transactionsByIdData(state) {
      return state.transactionById;
    },
  },
});
