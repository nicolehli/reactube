import axios from "axios";
import Config from ".../config.js";

const KEY = Config.YOUTUBE_KEY;

console.log(KEY);

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
