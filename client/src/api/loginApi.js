import axios from "axios";

const loginApi = (username, password) => {
  axios.post("/login", { username, password });
};

export default loginApi;
