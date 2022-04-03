import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone7.herokuapp.com",
});

export default instance;
