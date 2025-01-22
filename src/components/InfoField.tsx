import { Box, TextField, Typography } from '@mui/material';
import { StatusIndicator } from './StatusIndicator';

interface InfoFieldProps {
  label: string;
  value?: string;
  isEditable?: boolean;
  isStatus?: boolean;
  statusColor?: string;
  type?: string;
}

export const InfoField = ({ 
  label, 
  value, 
  isEditable = false, 
  isStatus = false,
  statusColor,
  type = 'text'
}: InfoFieldProps) => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography variant="body2" color="textSecondary">
          {label}
        </Typography>
        
        {isStatus ? (
        <StatusIndicator status={value || ''} color={statusColor} />
      ) : isEditable ? (
        <TextField
          variant="standard"
          placeholder={value}
          type={type}
          InputProps={{ disableUnderline: true }}
          sx={{ mt: -1 }}
        />
      ) : (
        <Typography variant="body2" color="textPrimary">
          {value}
        </Typography>
      )}
      </Box>
    </>
  );
};
