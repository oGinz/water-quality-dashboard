// src/services/waterQuality.js
import { 
    fetchWaterQualityData as fetchData,
    fetchLatestReadings as fetchLatest 
  } from './api';
  
  export const fetchDashboardData = () => fetchData();
  export const getLatestReadings = () => fetchLatest();