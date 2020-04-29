import axios from "axios";

const collageApi = {
  getCollage: async () => {
    const response = await fetch("/getCollage");
    const body = response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  },
  searchCollage: (input) => {
    return axios.post("/searchCollage", { input }).catch((err) => {
      throw err;
    });
  },
  addCollage: (image, tittle, description) => {
    return axios
      .post("/addCollage", { image, tittle, description })
      .catch((err) => {
        throw err;
      });
  },
};

export default collageApi;
