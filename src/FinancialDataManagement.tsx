import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Paper, Button, TextField, Box, FormControlLabel, Switch, Typography, Container, Tooltip, IconButton } from '@mui/material';
import MoreVertFilled from '@mui/icons-material/MoreVert';
import FilterListFilled from '@mui/icons-material/FilterList';
import AddFilled from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const columns = (navigate: any): GridColDef[] => [
  { field: 'company', headerName: 'Company Legal Name', flex: 1, minWidth: 200, renderCell: (params) => (
      <Button
        variant="text"
        color="primary"
        onClick={() => navigate(`/financial-data-management/company/company-details`)}
      >
        {params.value}
      </Button>
    ) },
  { field: 'codatid', headerName: 'Codat ID', width: 154 },
  { field: 'cif', headerName: 'CIF', width: 117 },
  { field: 'teamcode', headerName: 'Team Code', width: 114 },
  { field: 'accountingconnection', headerName: 'Accounting Connection', width: 196 },
  { field: 'monthlyrefresh', headerName: 'Monthly Refresh', width: 148 },
  { field: 'lastrefresh', 
    headerName: 'Last Refresh', 
    width: 188,
    renderHeader: () => (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          Last Refresh
          <Tooltip title="Tooltip test">
            <IconButton size="small" sx={{ ml: 0.5 }}>
              <InfoOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Last sync with accounting
        </Typography>
      </Box>
    )
  },
  { field: 'calock', headerName: 'CA Lock', width: 77 },
  { field: 'archived', headerName: 'Archived', width: 81 },
  { field: 'hidden', headerName: 'Hidden', width: 72 },
  {
    field: 'actions',
    headerName: '',
    width: 116,
    renderCell: (params) => (
      <Button
        endIcon={<MoreVertFilled />}
        variant="text"
        color="primary"
        onClick={() => handleActionClick(params.row.id)}
      >
        Actions
      </Button>
    ),
  },
];

const rows = [
  { id: 1, company: 'Scout Marketing Company, LLC', codatid: 42, cif: '1192881772', teamcode: '12A', accountingconnection: 'Linked', monthlyrefresh: 'Enabled', lastrefresh: 'Feb 2 2024 2:26 pm PT', calock: 'No', archived: 'No', hidden: 'No' },
  { id: 1, company: 'Scout Marketing Company, LLC', codatid: 42, cif: '1192881772', teamcode: '12A', accountingconnection: 'Linked', monthlyrefresh: 'Enabled', lastrefresh: 'Feb 2 2024 2:26 pm PT', calock: 'No', archived: 'No', hidden: 'No' },
  { id: 1, company: 'Scout Marketing Company, LLC', codatid: 42, cif: '1192881772', teamcode: '12A', accountingconnection: 'Linked', monthlyrefresh: 'Enabled', lastrefresh: 'Feb 2 2024 2:26 pm PT', calock: 'No', archived: 'No', hidden: 'No' },
  // Add more rows as needed
];

const handleActionClick = (id: number) => {
  console.log(`Action button clicked for row with id: ${id}`);
};

const FinancialDataManagement: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [switchChecked, setSwitchChecked] = useState(false);
  const navigate = useNavigate();

  const handleCompanyClick = (companyID: string) => {
    navigate('/financial-data-management/company/company-details');
  };
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchChecked(event.target.checked);
  };

  const filteredRows = rows.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <Container 
      maxWidth={false} 
      sx={{ mt: 2, mb: 4, maxWidth: 1768 }}>
      <Paper  
        sx={{ py: 2, px: 2, bgcolor: 'white' }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TextField
            fullWidth={true}
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={handleSearch}
            size='small'
            sx={{ maxWidth: 438 }}
          />
          <Button 
            startIcon={<FilterListFilled />}
            variant="text" 
            size='small'
            color="primary" 
            sx={{ ml: 2 }}
          >
            Filters
          </Button>
          <FormControlLabel
            control={
              <Switch
                checked={switchChecked}
                onChange={handleSwitchChange}
                color="primary"
              />
            }
            label={<Typography variant="body2">Display hidden companies</Typography>}
            sx={{ ml: 2, whiteSpace: 'nowrap' }}
          />
          <Button 
            startIcon={<AddFilled />}
            variant="outlined"
            color="primary" 
            sx={{ ml: 'auto', whiteSpace: 'nowrap' }}
          >
            Add Company
          </Button>
        </Box>
        <DataGrid
          rows={filteredRows}
          columns={columns(navigate)}
          pageSizeOptions={[5, 10, 20]}
          disableColumnMenu
          disableColumnResize
          disableColumnSorting
          disableRowSelectionOnClick
          slots={{
            toolbar: GridToolbar,
          }}
          sx={{
            border: 'none',
            '& .MuiDataGrid-columnSeparator': {
              display: 'none',
            },
          }}
        />
      </Paper>
    </Container>
  );
};

export default FinancialDataManagement;
