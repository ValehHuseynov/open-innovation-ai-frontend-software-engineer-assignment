/* eslint-disable @typescript-eslint/no-explicit-any */
const API_URL = import.meta.env.VITE_APP_API_URL;

export function Axios(axios: any) {
  axios.defaults.baseURL = API_URL;
  axios.defaults.headers.Accept = "application/json";

  axios.interceptors.request.use(
    (config: { headers: { Authorization: string } }) => {
      return config;
    },
    (err: any) => Promise.reject(err)
  );
}
