import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f4164ad93c6f4f039d7d5d3bf5f5733a",
  },
});
