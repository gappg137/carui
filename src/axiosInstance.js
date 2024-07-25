import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8082', 
  timeout: 10000,
});

export default axiosInstance;