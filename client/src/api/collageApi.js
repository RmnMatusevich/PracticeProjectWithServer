const getCollageAPI = async (username, password) => {
  const response = await fetch("/getCollage");
  const body = response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

export default getCollageAPI;
