import axios from "axios";

const axiosClient = async (path, data, accessToken = null, type = "POST", isFormData = false) => {
  // baseURL  must end with a slash
  const baseUrl = process.env.NEXT_PUBLIC_DJANGO_URL.endsWith('/') 
    ? process.env.NEXT_PUBLIC_DJANGO_URL 
    : `${process.env.NEXT_PUBLIC_DJANGO_URL}/`;
    
  // Ensure path does not start with a slash to avoid double slashes in the url
  const endpoint = baseUrl + path;

  // configure headers, including Authorization if accessToken is provided
  const config = {
    headers: {
      // Only include the authorization header if an access token is provided
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      // set contentType based on whether sending FormData or JSON  
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    },
    withCredentials: false,
  };

  try {
    let res;

    if (type === "POST") {
      res = await axios.post(endpoint, data, config);
    } 
    else if (type === "GET") {
      res = await axios.get(endpoint, config);
    }
    else if (type === "PUT"){
      // 'data' is for saving user data
      res = await axios.put(endpoint, data, config);
    }

    return res.data;
  } catch (err) {
    console.error(`${type} request failed to ${path}`, err.response?.data);
    throw err;
  }
};

export default axiosClient;