import { useNavigate, useParams, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Paper, Grid, Typography, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import { InfoField } from './components/InfoField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AccountBucketsView } from './components/AccountBucketsView';

const DRAWER_WIDTH = 320;

const CompanyDetailsView: React.FC = () => (
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
);

const CompanyDetail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const isPathActive = (path: string) => {
    return location.pathname.endsWith(path);
  };

  const getFullPath = (subPath: string) => {
    return `/financial-data-management/company/${subPath}`;  // Using backticks
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            position: 'fixed',
            marginTop: '64px',
            zIndex: 1000,
            px: '16px',
            py: '24px'
          },
        }}
      >
        <List>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/financial-data-management')}
            sx={{ mb: 2 }}
            variant="text"
          >
            Company List
          </Button>
          <Typography
            variant="body1"
            sx={{
              px: 2,
              pb: 2,
              borderBottom: '1px solid var(--divider, rgba(0, 0, 0, 0.12))',
              mb: 2
            }}
          >
            Scout Marketing Company, LLC
          </Typography>
          <ListItem disablePadding>
            <ListItemButton 
              selected={isPathActive('company-details')}
              onClick={() => navigate(getFullPath('company-details'))}
            >
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary="Company Details" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              selected={isPathActive('workbook-management')}
              onClick={() => navigate(getFullPath('workbook-management'))}
            >
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary="Workbook Management" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              selected={isPathActive('pro-forma-spread')}
              onClick={() => navigate(getFullPath('pro-forma-spread'))}
            >
              <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
              <ListItemText primary="Pro Forma Spread" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              selected={isPathActive('account-buckets')}
              onClick={() => navigate(getFullPath('account-buckets'))}
            >
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Account Buckets" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              selected={isPathActive('cash-accounts')}
              onClick={() => navigate(getFullPath('cash-accounts'))}
            >
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Cash Accounts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              selected={isPathActive('loan-accounts')}
              onClick={() => navigate(getFullPath('loan-accounts'))}
            >
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Loan Accounts" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <div style={{ 
        flexGrow: 1,
        height: 'calc(100vh - 64px)', // Changed from 100vh to account for app bar
        marginTop: '0', // Changed from -64px
        paddingTop: '88px', // Added to push content below app bar (64px + 24px padding)
        padding: '0 24px 0 24px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        <Routes>
          <Route path="company-details" element={<CompanyDetailsView />} />
          <Route path="workbook-management" element={
            <Typography>Workbook Management View</Typography>
          } />
          <Route path="pro-forma-spread" element={
            <Typography>Pro Forma Spread View</Typography>
          } />
          <Route path="account-buckets" element={<AccountBucketsView />} />
          <Route path="cash-accounts" element={
            <Typography>Cash Accounts View</Typography>
          } />
          <Route path="loan-accounts" element={
            <Typography>Loan Accounts View</Typography>
          } />
          <Route index element={<Navigate to="company-details" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default CompanyDetail;