import React from 'react';
import { Paper, Typography } from '@mui/material';

const MyAccount = () => (
  <Paper elevation={4} sx={{ maxWidth: 'xl', p: 3, bgcolor: 'white', borderRadius: 1, mx: 'auto', my: 3 }}>
    <Typography variant="h5" color="textPrimary">
      My Account Page
    </Typography>
  </Paper>
);

export default MyAccount;