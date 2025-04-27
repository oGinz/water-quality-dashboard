import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Fixed import
import DashboardPage from './pages/DashboardPage';
import AlertNotifications from './components/common/AlertNotifications';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import './App.css';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    error: { main: '#f44336' },
    background: { default: '#f5f5f5' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 600 },
  },
});

function App() {
  return (
    <BrowserRouter> {/* Only one router at the top level */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app-container">
          <Navigation />
          <AlertNotifications />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;