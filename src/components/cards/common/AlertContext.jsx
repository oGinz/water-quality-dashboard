// src/contexts/AlertContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (message, type = 'error') => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, message, type }]);
  };

  const removeAlert = (id) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  return useContext(AlertContext);
}