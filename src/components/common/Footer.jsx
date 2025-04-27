// src/components/common/Footer.jsx
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', bgcolor: 'background.paper' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Water Quality Monitoring System
      </Typography>
    </Box>
  );
}