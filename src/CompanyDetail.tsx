import React from 'react';
import { Paper, Grid, Typography, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import EditIcon from '@mui/icons-material/Edit';
import { InfoField } from './components/InfoField'; // Adjust the import path as needed

const CompanyDetail: React.FC = () => (
  <Paper elevation={4} sx={{ maxWidth: 'xl', p: 3, bgcolor: 'white', borderRadius: 1, mx: 'auto', my: 3 }}>
    <Grid container spacing={6}>
      <Grid item xs={12} container justifyContent="space-between">
        <Grid item>
          <Typography variant="overline" color="textSecondary">
            SUBSIDIARY
          </Typography>
          <Typography variant="h5" color="textPrimary">
            Scout Marketing Company, LLC
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" endIcon={<LaunchIcon />} sx={{ mr: 2 }}>
            VIEW PARENT
          </Button>
          <Button variant="outlined" color="primary" startIcon={<EditIcon />}>
            EDIT
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12} container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <InfoField label="Codat Connection" value="Connected" isStatus={true} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <InfoField label="Monthly Refresh" value="Enabled" isStatus={true} />
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);

export default CompanyDetail; // Ensure this is the default export