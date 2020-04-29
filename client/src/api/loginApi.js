import axios from "axios";

const loginApi = {
  login: (username, password) => {
    return axios.post("/login", { username, password }).catch((err) => {
      throw err;
    });
  },
};

export default loginApi;
