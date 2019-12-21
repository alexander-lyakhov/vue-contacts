import axios from 'axios';
import { flags } from '@/defs/flags';

axios.defaults.baseURL = 'https://my-json-server.typicode.com/alexander-lyakhov/epam-tz';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(
  config => {
    flags.isLoading = true;
    return config;
  },

  err => {
    flags.isLoading = false;
    return Promise.reject(err);
  },
);

axios.interceptors.response.use(
  res => {
    flags.isLoading = false;
    return res;
  },

  err => {
    flags.isLoading = false;
    return Promise.reject(err);
  },
);

export default axios;
