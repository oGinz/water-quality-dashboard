// src/pages/DashboardPage.jsx
import StatusCard from '../components/cards/StatusCard';
import LineChart from '../components/charts/LineChart';
import React, { useState, useEffect } from 'react';
import { CircularProgress, Alert, Typography } from '@mui/material';
import { fetchWaterQualityData } from '../api/waterQualityApi';

function DashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchWaterQualityData();
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        
        // Validate data structure
        if (!result || !result.someExpectedProperty) {
          throw new Error('Invalid data structure received');
        }
        
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!data) return <Alert severity="warning">No data available</Alert>;

  return (
    <div>
      <Typography variant="h4">Water Quality Dashboard</Typography>
      
      {/* Safe data access with optional chaining */}
      <Typography variant="body1">
        Current Temperature: {data?.temperature?.value ?? 'N/A'}°C
      </Typography>
      
      <Typography variant="body1">
        Current pH Level: {data?.ph?.value ?? 'N/A'}
      </Typography>
      
      {/* Add more dashboard components here */}
    </div>
  );
}

export default DashboardPage;