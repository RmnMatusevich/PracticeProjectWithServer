import axios from "axios";

const singupApi = (username, password, firstName, lastName, age) => {
  return axios.post("/signup", {
    username,
    password,
    firstName,
    lastName,
    age,
  });
};

export default singupApi;
