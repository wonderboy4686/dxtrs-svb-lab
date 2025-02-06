import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => (
  <Paper elevation={4} sx={{ maxWidth: 'xl', p: 3, bgcolor: 'white', borderRadius: 1, mx: 'auto', my: 3 }}>
    <Typography variant="h5" color="textPrimary" gutterBottom>
      dxtrs-lab
    </Typography>
    <List>
      <ListItem button component={Link} to="/financial-data-management">
        <ListItemText primary="Financial Data Management" />
      </ListItem>
      <ListItem button component={Link} to="/profile">
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button component={Link} to="/my-account">
        <ListItemText primary="My Account" />
      </ListItem>
    </List>
  </Paper>
);

export default Home;