import axios from "axios";

export const fetchAllTransactions = () => {
  return axios.get(`${import.meta.env.VITE_API}/transactions`);
};

export const fetchTransactionsById = (id) => {
  return axios.get(`${import.meta.env.VITE_API}/transactions/${id}`);
};

export const PostTransactionsPayment = (id, body) => {
  return axios.post(`${import.meta.env.VITE_API}/transactions/${id}`, body);
};
