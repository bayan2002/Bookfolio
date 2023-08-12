import axios from "axios";
import router from "../router";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// include the token in every request
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// handle 401 responses
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log("error.response.status: ", error.response.status === 401);
      setTimeout(() => {
        localStorage.removeItem("token");
        router.push("/");
      }, 1000); 
    }
    return Promise.reject(error);
  }
);

export default instance;
