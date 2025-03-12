import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LaunchIcon from '@mui/icons-material/Launch';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import theme from './theme';
import { InfoField } from './components/InfoField';
import FinancialDataManagement from './FinancialDataManagement';
import CompanyDetail from './CompanyDetail'; // Import the CompanyDetail component
import Home from './Home'; // Import the Home component
import HomeIcon from '@mui/icons-material/Home';
import StorageIcon from '@mui/icons-material/Storage';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar color="default" position="fixed" elevation={4}>
          <Toolbar sx={{ minHeight: '64px', px: { xs: 2, sm: 4 } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
              <Box
                sx={{ width: 344 }}
                role="presentation"
                onClick={handleDrawerClose}
                onKeyDown={handleDrawerClose}
              >
                <Typography variant="h6" sx={{ p: 2 }}>
                  Pages
                </Typography>
                <Divider />
                <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button component={Link} to="/financial-data-management">
                    <ListItemIcon>
                      <StorageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Financial Data Management" secondary="Manage financial workbooks" />
                  </ListItem>
                  <ListItem button component={Link} to="/profile">
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" secondary="View and edit your profile" />
                  </ListItem>
                  <ListItem button component={Link} to="/my-account">
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="My account" secondary="Manage your account settings" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <PageTitle />
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: '1.5' }}>
              Logged in as dyun@svb.com
            </Typography>
            <Divider orientation="vertical" sx={{ mx: 2, height: '24px', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
        
        <Container 
          maxWidth={false} 
          disableGutters
          sx={{ 
            bgcolor: '#f5f5f5', 
            minHeight: '100vh', 
            pt: '64px',
           }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/financial-data-management" element={<FinancialDataManagement />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/financial-data-management/company/*" element={<CompanyDetail />} /> {/* Use CompanyDetail component */}
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

const PageTitle = () => {
  const location = useLocation();
  let title = 'App Title';

  if (location.pathname === '/') {
    title = 'dxtrs-lab';
  } else if (location.pathname.startsWith('/financial-data-management/company/')) {  // Updated path
    title = 'Company Detail';
  } else if (location.pathname === '/financial-data-management') {
    title = 'Financial Data Management';
  } else if (location.pathname === '/profile') {
    title = 'Profile';
  } else if (location.pathname === '/my-account') {
    title = 'My Account';
  }

  return <>{title}</>;
};

const Profile = () => (
  <Paper elevation={4} sx={{ maxWidth: 'xl', p: 3, bgcolor: 'white', borderRadius: 1, mx: 'auto', my: 3 }}>
    <Typography variant="h5" color="textPrimary">
      Profile Page
    </Typography>
  </Paper>
);

const MyAccount = () => (
  <Paper elevation={4} sx={{ maxWidth: 'xl', p: 3, bgcolor: 'white', borderRadius: 1, mx: 'auto', my: 3 }}>
    <Typography variant="h5" color="textPrimary">
      My Account Page
    </Typography>
  </Paper>
);

export default App;
