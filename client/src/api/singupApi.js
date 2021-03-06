import axios from "axios";

const singupApi = {
  singup: (username, password, firstName, lastName, age) => {
    return axios
      .post("/signup", {
        username,
        password,
        firstName,
        lastName,
        age,
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default singupApi;
