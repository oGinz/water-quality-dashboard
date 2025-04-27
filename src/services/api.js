// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api'
});

// Named exports only
export const fetchWaterQualityData = () => API.get('/water-quality');
export const fetchLatestReadings = () => API.get('/water-quality/latest');

// Remove default export