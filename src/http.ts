import axios from 'axios';

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  // You can add more default settings if needed
});

export default httpClient;