import axios from "axios";

const KEY = "AIzaSyA6tlvC1YRxOpSOgT4GwK_hevYrWQrRLz4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
