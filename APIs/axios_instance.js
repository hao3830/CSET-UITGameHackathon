import axios from "axios";

// TODO: change prod api url
const instance = axios.create({
  baseURL: "https://aiclub.uit.edu.vn/hackathon/2022/backend",
});

export default instance;
