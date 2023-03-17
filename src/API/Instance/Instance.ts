import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
const refrashToken = localStorage.getItem("refreshToken");

export const baseInstance = axios.create({
  baseURL: "http://15.164.185.150:8080",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const tokenInstance = axios.create({
  baseURL: "http://15.164.185.150:8080",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: accessToken,
  },
});

baseInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.data.message === "Access Token Expiration") {
      const originalRequest = error.config;
      const res = await axios.post("http://15.164.185.150:8080/reissue", "",{
        headers: {
          Refresh: refrashToken,
        }
      });
      if (res.status === 200) {
        const newAccessToken = res.data.accessToken;
        baseInstance.defaults.headers.common["Authorization"] = newAccessToken;
        originalRequest.headers["Authorization"] = newAccessToken;
        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("memberId", res.data.memberId);
        localStorage.setItem("refrashToken", res.data.refrashToken);
        return axios(originalRequest); // 반환된 처리를 다시진행하게 만드는것
      }
    }
    return Promise.reject(error);
  }
);

tokenInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.data.message === "Access Token Expiration") {
      const originalRequest = error.config;
      const res = await axios.post("http://15.164.185.150:8080/reissue", "", {
        headers: {
          Refresh: refrashToken,
        }
      });
      if (res.status === 200) {
        const newAccessToken = res.data.accessToken;
        baseInstance.defaults.headers.common["Authorization"] = newAccessToken;
        originalRequest.headers["Authorization"] = newAccessToken;
        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("memberId", res.data.memberId);
        localStorage.setItem("refrashToken", res.data.refrashToken);
        return axios(originalRequest); // 반환된 처리를 다시진행하게 만드는것
      }
    }
    return Promise.reject(error);
  }
);
