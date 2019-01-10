import axios from "axios";
import * as Config from "../config";

const KEY = Config.key.YOUTUBE_KEY;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
