import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://data.fixer.io/api/',
});

instance.interceptors.request.use((config) => {
  config.params = {
    access_key: 'b49c7b91de7c9facbe16f120a677c367',
    ...config.params,
  };
  return config;
});
