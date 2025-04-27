// src/components/cards/StatusCard.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

export default function StatusCard({ title, value, isAlert }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="text.secondary">{title}</Typography>
        <Typography variant="h5">
          {value}
          {isAlert && <WarningIcon color="error" sx={{ ml: 1 }} />}
        </Typography>
      </CardContent>
    </Card>
  );
}