// src/components/common/Navigation.jsx
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Water Quality Monitor
        </Typography>
      </Toolbar>
    </AppBar>
  );
}