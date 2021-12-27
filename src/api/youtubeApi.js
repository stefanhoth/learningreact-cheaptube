import axios from "axios";

const KEY = "AIzaSyBHFfKRcGFMza7EFNMPo_Uad0OftUc9uYk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    maxResults: 5,
    type: "video",
    key: KEY,
  },
  headers: {
    Accept: "application/json",
  },
});
