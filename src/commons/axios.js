import axios from "axios";

export let axiosAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

