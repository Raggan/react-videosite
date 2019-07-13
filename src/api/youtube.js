import axios from "axios";
const KEY = "AIzaSyCSMZ0SEpQOkuPp69y9qNANKL9v7YFR2cU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
