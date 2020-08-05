import axios from "axios";

const baseURL = "https://api-staging.wework.cn/chinaos/";
const axiosApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 100000,
});

const successHandler = (error: any) => {
  return Promise.reject({ ...error });
};

const errorHandler = (response: any) => {
  return response;
};

// @TODO: 给实例加方法，js可以，ts不允许？
// axiosApi.errorHandler = errorHandler
// 发送request前统一进行一个拦截,可以统一加 Authorization 信息等
axiosApi.interceptors.request.use((config) => {
  const token = "form localStorage";
  config.headers = { Authorization: token };
  return config;
});

// response前进行拦截，可以对response做统一处理，通常在这里处理error message
axiosApi.interceptors.response.use((response: any) => {
  if (response.data.code === 0) {
    return response;
  }
});

// const axiosApi = Object.assign(axiosApi, successHandler)
// console.log(axiosApi.successHandler, '==axiosaxiosApi==')
export default axiosApi;
