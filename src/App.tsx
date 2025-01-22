import { ThemeProvider } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Toolbar,
  Typography
} from '@mui/material';
import { InfoField } from './components/InfoField';
import MenuIcon from '@mui/icons-material/Menu';
import LaunchIcon from '@mui/icons-material/Launch';
import EditIcon from '@mui/icons-material/Edit';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        color="default"
        position="fixed"
        elevation={4}
      >
        <Toolbar
          sx={{
            minHeight: '64px',
            px: { xs: 2, sm: 4 }
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            color="text.primary"
            sx={{
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}
          >
            Financial Data Management
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ 
              lineHeight: '1.5'     // For proper vertical alignment
            }}
          >
            Logged in as dyun@svb.com
          </Typography>

          <Divider
            orientation="vertical"
            sx={{
              mx: 2,
              height: '24px',
              borderColor: 'rgba(0, 0, 0, 0.12)'
            }}
          />

          <Button color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Toolbar /> {/* Spacer for fixed AppBar */}
      <Container 
        maxWidth={false} 
        sx={{ 
          bgcolor: '#f5f5f5',
          minHeight: 'calc(100vh - 64px)',
          py: 3,

        }}
      >
        <Paper 
        elevation={4}
        sx={{ 
          maxWidth: "xl", 
          p: 3, 
          bgcolor: "white", 
          borderRadius: 1,
          minHeight: 'calc(100vh - 64px)', // Full viewport height minus AppBar
          mx: 'auto', // Center the box
          my: 3, // Add some vertical margin
        }}>
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
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<LaunchIcon />}
                  sx={{ mr: 2 }}
                >
                  VIEW PARENT
                </Button>
                <Button variant="outlined" color="primary" startIcon={<EditIcon />}>
                  EDIT
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12} container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="Codat Connection"
                  value="Connected"
                  isStatus={true}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="Monthly Refresh"
                  value="Enabled"
                  isStatus={true}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="Codat ID"
                  value="1f463dc2-51c2-46a1-891d-bb4b279f8e36"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="Accounting Software Provider"
                  value="Quickbooks Online"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="CIF"
                  value="123456789"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="Team Code"
                  value="12A"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="Team Code Mailbox"
                  value="12A@svb.com"
                  isEditable={true}
                  type="email"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="FY End Date"
                  value="Dec 2024"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="Connection Source"
                  value="DLA"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="CRM Entity ID"
                  value="123456"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <InfoField 
                    label="Monthly Reminder Email"
                    value="Enabled"
                    isStatus={true}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="Primary Email"
                  value="sam@scout.com"
                  isEditable={true}
                  type="email"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="Secondary Client Email"
                  value="nick@scout.com"
                  isEditable={true}
                  type="email"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InfoField 
                  label="CRM Primary Email Contact"
                  value="jlee@scout.com"
                  isEditable={true}
                  type="email"
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
