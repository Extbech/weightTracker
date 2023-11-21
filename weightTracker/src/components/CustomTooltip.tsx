import { TooltipProps } from 'recharts';
import { Box, Typography } from '@mui/material';
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload) {
    return (
      <Box sx={{ backgroundColor: (theme) => theme.palette.primary.main, padding: '5px' }}>
        <Typography sx={{ color: 'whitesmoke' }}>Date: {label}</Typography>
        {payload.map((item, index) => (
          <Typography key={index} sx={{ color: item.color }}>
            {`${item.name}: ${item.value} kg`}
          </Typography>
        ))}
      </Box>
    );
  }

  return null;
};
export default CustomTooltip;