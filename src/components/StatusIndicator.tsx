import { Box, Typography } from '@mui/material';

interface StatusIndicatorProps {
  status: string;
  color?: string;
}

export const StatusIndicator = ({ 
  status,
  color = "success.main" 
}: StatusIndicatorProps) => {
  return (
    <Box display="flex" alignItems="center">
      <Box
        sx={{
          width: 8,
          height: 8,
          bgcolor: color,
          borderRadius: "50%",
          mr: 1,
        }}
      />
      <Typography variant="body2" color="textPrimary">
        {status}
      </Typography>
    </Box>
  );
};
