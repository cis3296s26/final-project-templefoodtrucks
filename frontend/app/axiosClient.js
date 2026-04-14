import axios from "axios";

const axiosClient = async (path, data, accessToken = null, type = "POST") => {
  let endpoint = process.env.NEXT_PUBLIC_DJANGO_URL + path
  console.log(endpoint)
  try {
    if (type == "POST") {
      var res = await axios.post(
        endpoint,
        data,
        {
          headers: {
            Authorization: `JWT ${accessToken}`,
          },
        },
      );
    } else if (type == "GET") {
      var res = await axios.get(endpoint, {
        headers: {
          Authorization: `JWT ${accessToken}`,
        },
      });
    }

    return res.data;
  } catch (err) {
    console.log(`${type} request failed to ${path}`);
    console.log(err);
  }
};

export default axiosClient;
