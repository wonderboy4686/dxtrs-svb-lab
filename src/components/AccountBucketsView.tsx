import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGrid } from '@mui/x-data-grid';

export const AccountBucketsView: React.FC = () => (
  

  <div style={{ 
      height: '100%', 
      overflow: 'auto',
      padding: '1px',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none', 
    }}>
    <Typography 
      variant="h5" 
      sx={{ my: 4, color: 'text.primary' }}>Account Buckets
    </Typography>
    
    <Paper sx={{ 
      bgcolor: 'white', 
      borderRadius: 1,
      p: 3,
      mb: 3,
      position: 'relative',
    }}>

      <Grid 
        container 
        sx={{ 
          px: 2, 
          py: 2, 
          mb: 3,
          borderBottom: '1px solid #E0E0E0',
          position: 'sticky',
          top: -1,
          bgcolor: 'white',
          zIndex: 1
        }}
      >

        <Grid item xs={3}>
          <Typography variant="subtitle2" fontWeight="bold" sx={{ px: '10px' }}>CreditLens ID & Label</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2" fontWeight="bold" sx={{ px: '10px' }}>Account Name</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2" fontWeight="bold" sx={{ px: '10px' }}>Fully Qualified Category</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2" fontWeight="bold" sx={{ px: '10px' }}>Account ID</Typography>
        </Grid>
      </Grid>
      
      <Accordion
        defaultExpanded 
        elevation={0}
        disableGutters
        sx={{
          borderTop: '1px solid #E0E0E0',
          borderLeft: '1px solid #E0E0E0',
          borderRight: '1px solid #E0E0E0',
          borderRadius: '4px 4px 0 0',
          "&:before": { display: 'none' }
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Assets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataGrid
            slots={{ columnHeaders: () => null }}
            hideFooter
            sx={{ 
              border: 'none',
              '& .MuiDataGrid-virtualScroller': {
                overflow: 'visible !important'  // Changed from hidden to visible
              },
              '& .MuiDataGrid-main': {
                overflow: 'visible'  // Changed from hidden to visible
              }
            }}
                rows={[
                  { id: 1, creditLensId: 'CL001', accountName: 'Cash', category: 'Assets/Current/Cash', accountId: 'A1001' },
                  { id: 2, creditLensId: 'CL002', accountName: 'Receivables', category: 'Assets/Current/Receivables', accountId: 'A1002' },
                  { id: 3, creditLensId: 'CL003', accountName: 'Inventory', category: 'Assets/Current/Inventory', accountId: 'A1003' },
                  { id: 1, creditLensId: 'CL001', accountName: 'Cash', category: 'Assets/Current/Cash', accountId: 'A1001' },
                  { id: 2, creditLensId: 'CL002', accountName: 'Receivables', category: 'Assets/Current/Receivables', accountId: 'A1002' },
                  { id: 3, creditLensId: 'CL003', accountName: 'Inventory', category: 'Assets/Current/Inventory', accountId: 'A1003' },
                  { id: 1, creditLensId: 'CL001', accountName: 'Cash', category: 'Assets/Current/Cash', accountId: 'A1001' },
                  { id: 2, creditLensId: 'CL002', accountName: 'Receivables', category: 'Assets/Current/Receivables', accountId: 'A1002' },
                  { id: 3, creditLensId: 'CL003', accountName: 'Inventory', category: 'Assets/Current/Inventory', accountId: 'A1003' },
                  { id: 1, creditLensId: 'CL001', accountName: 'Cash', category: 'Assets/Current/Cash', accountId: 'A1001' },
                  { id: 2, creditLensId: 'CL002', accountName: 'Receivables', category: 'Assets/Current/Receivables', accountId: 'A1002' },
                  { id: 3, creditLensId: 'CL003', accountName: 'Inventory', category: 'Assets/Current/Inventory', accountId: 'A1003' },
                  { id: 1, creditLensId: 'CL001', accountName: 'Cash', category: 'Assets/Current/Cash', accountId: 'A1001' },
                  { id: 2, creditLensId: 'CL002', accountName: 'Receivables', category: 'Assets/Current/Receivables', accountId: 'A1002' },
                  { id: 3, creditLensId: 'CL003', accountName: 'Inventory', category: 'Assets/Current/Inventory', accountId: 'A1003' },
                  { id: 1, creditLensId: 'CL001', accountName: 'Cash', category: 'Assets/Current/Cash', accountId: 'A1001' },
                  { id: 2, creditLensId: 'CL002', accountName: 'Receivables', category: 'Assets/Current/Receivables', accountId: 'A1002' },
                  { id: 3, creditLensId: 'CL003', accountName: 'Inventory', category: 'Assets/Current/Inventory', accountId: 'A1003' },
                  { id: 3, creditLensId: 'CL003', accountName: 'Inventory', category: 'Assets/Current/Inventory', accountId: 'A1003' },
                  { id: 1, creditLensId: 'CL001', accountName: 'Cash', category: 'Assets/Current/Cash', accountId: 'A1001' },
                  { id: 2, creditLensId: 'CL002', accountName: 'Receivables', category: 'Assets/Current/Receivables', accountId: 'A1002' },
                  { id: 3, creditLensId: 'CL003', accountName: 'Inventory', category: 'Assets/Current/Inventory', accountId: 'A1003' },
                  { id: 1, creditLensId: 'CL001', accountName: 'Cash', category: 'Assets/Current/Cash', accountId: 'A1001' },
                  { id: 2, creditLensId: 'CL002', accountName: 'Receivables', category: 'Assets/Current/Receivables', accountId: 'A1002' },
                  { id: 3, creditLensId: 'CL003', accountName: 'Inventory', category: 'Assets/Current/Inventory', accountId: 'A1003' },
                  { id: 1, creditLensId: 'CL001', accountName: 'Cash', category: 'Assets/Current/Cash', accountId: 'A1001' },
                  { id: 2, creditLensId: 'CL002', accountName: 'Receivables', category: 'Assets/Current/Receivables', accountId: 'A1002' },
                  { id: 3, creditLensId: 'CL003', accountName: 'Inventory', category: 'Assets/Current/Inventory', accountId: 'A1003' },
                ]}
                columns={[
                  { field: 'creditLensId', flex: 1 },
                  { field: 'accountName', flex: 1 },
                  { field: 'category', flex: 1 },
                  { field: 'accountId', flex: 1 },
                ]}
                disableColumnMenu
                disableRowSelectionOnClick
              />
          </AccordionDetails>
        </Accordion>
        
        <Accordion 
          elevation={0}
          disableGutters
          sx={{
            '&:before': {
              display: 'block !important',
              opacity: '1 !important'
            },
            borderLeft: '1px solid #E0E0E0',
            borderRight: '1px solid #E0E0E0',
          }}
          >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Assets</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Assets bucket content goes here</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          elevation={0}
          disableGutters
          sx={{
            '&:before': {
              display: 'block !important',
              opacity: '1 !important'
            },
            borderLeft: '1px solid #E0E0E0',
            borderRight: '1px solid #E0E0E0',
            borderBottom: '1px solid #E0E0E0',
          }}
          >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Assets</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Assets bucket content goes here</Typography>
          </AccordionDetails>
        </Accordion>

    </Paper>
  </div>);