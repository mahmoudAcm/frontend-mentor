import axios from 'axios';
import { getCookie } from 'cookies-next';

const token = getCookie('next-token');

// Create a new instance of Axios
const api = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${token}` // Replace with your actual authorization token
  }
});

export default api;
