import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:5000/api", 
   withCredentials: true,// change if backend runs on different port
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
