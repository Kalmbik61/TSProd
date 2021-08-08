import axios from "axios";
import { REACT_APP_BASE_URL } from "../config";

export const Http = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    //   Authorization: "Basic " + window.btoa("whoisthere:coolguysarehere"),
  },
});
