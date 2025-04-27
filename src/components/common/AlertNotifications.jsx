// src/components/common/AlertNotifications.jsx
import { Snackbar, Alert } from '@mui/material';
import { useState } from 'react';

export default function AlertNotifications() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info');

  // You'll call this function from other components
  const showAlert = (msg, type = 'info') => {
    setMessage(msg);
    setSeverity(type);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity={severity} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}

// Export the showAlert function to use globally
export const useAlert = () => {
  const [setAlert] = useState();
  return (message, type) => setAlert({ message, type });
};