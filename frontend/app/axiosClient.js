import axios from "axios";

const axiosClient = async (path, data, accessToken = null, type = "POST") => {
  const endpoint = process.env.NEXT_PUBLIC_DJANGO_URL + path;

  console.log(endpoint);

  const config = {
    headers: {
      ...(accessToken && { Authorization: `JWT ${accessToken}` }),
    },
    withCredentials: true,
  };

  try {
    let res;

    if (type === "POST") {
      res = await axios.post(endpoint, data, config);
    } else if (type === "GET") {
      res = await axios.get(endpoint, config);
    }

    return res.data;
  } catch (err) {
    console.log(`${type} request failed to ${path}`);
    console.log(err);
    throw err;
  }
};

export default axiosClient;