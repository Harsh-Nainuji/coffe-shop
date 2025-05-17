import axios from 'axios';
const adminApi = axios.create({
  baseURL: 'https://coffe-shop-backend.onrender.com',
  headers: {
    Authorization: `Basic ${btoa('admin:admin123')}`
  }
});
export default adminApi;
//coment
