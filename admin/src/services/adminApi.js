import axios from 'axios';
const adminApi = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    Authorization: `Basic ${btoa('admin:admin123')}`
  }
});
export default adminApi;
