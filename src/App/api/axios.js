import axios from "axios";


export const requestCore = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
