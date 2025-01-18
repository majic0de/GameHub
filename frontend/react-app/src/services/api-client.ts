import axios from "axios";

// Create an instance of axios with default configuration
export default axios.create({
  baseURL: "https://api.rawg.io/api", // Base URL for the API
  params: {
    key: "f4164ad93c6f4f039d7d5d3bf5f5733a", // API key for authentication
  },
});
