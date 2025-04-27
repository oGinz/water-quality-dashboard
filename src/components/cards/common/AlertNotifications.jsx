// src/components/common/AlertNotifications.jsx
import React from 'react';
import { 
  Snackbar,
  Alert,
  Slide 
} from '@mui/material';
import { useAlert } from '../../contexts/AlertContext';

export default function AlertNotifications() {
  const { alerts, removeAlert } = useAlert();

  return (
    <>
      {alerts.map((alert) => (
        <Snackbar
          key={alert.id}
          open={true}
          autoHideDuration={6000}
          onClose={() => removeAlert(alert.id)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          TransitionComponent={Slide}
        >
          <Alert 
            severity={alert.type} 
            variant="filled"
            sx={{ width: '100%' }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
}