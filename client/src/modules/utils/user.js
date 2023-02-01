import axios from "axios";

export const fetchAllUsers = () => {
  return axios.get(`${import.meta.env.VITE_API}/user`);
};
