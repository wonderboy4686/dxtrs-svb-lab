import React from 'react';
import { Paper, Typography } from '@mui/material';

const Profile = () => (
  <Paper elevation={4} sx={{ maxWidth: 'xl', p: 3, bgcolor: 'white', borderRadius: 1, mx: 'auto', my: 3 }}>
    <Typography variant="h5" color="textPrimary">
      Profile Page
    </Typography>
  </Paper>
);

export default Profile;