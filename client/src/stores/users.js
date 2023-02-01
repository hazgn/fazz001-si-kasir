import { defineStore } from "pinia";
import { fetchAllUsers } from "../modules/utils/user";

export const user = defineStore("user", {
  state: () => ({
    listUser: {
      data: [],
      isLoading: false,
      isError: false,
      errorMessage: "",
    },
  }),
  actions: {
    async FetchListUser() {
      this.listUser.isLoading = true;
      try {
        const response = await fetchAllUsers();
        this.listUser.isLoading = false;
        this.listUser.data = response.data.result;
      } catch ({ ...error }) {
        this.listUser.isLoading = false;
        this.listUser.isError = true;
        this.listUser.errorMessage = "Internal Server is Error!";
        throw error;
      }
    },
  },
  getters: {
    listUserData(state) {
      return state.listUser;
    },
  },
});
