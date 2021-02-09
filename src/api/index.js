import axios from "axios";

export default axios.create({
  baseURL: "https://60214c6646f1e4001780434a.mockapi.io/rows",
  headers: { "Content-Type": "application/json" },
});
