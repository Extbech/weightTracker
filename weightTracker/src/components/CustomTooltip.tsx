import { TooltipProps } from 'recharts';

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload) {
    return (
      <div style={{ backgroundColor: '#312e81', padding: '5px' }}>
        <p>Date: {label}</p>
        {payload.map((item, index) => (
          <p key={index} style={{ color: item.color }}>
            {`${item.name}: ${item.value} kg`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};
export default CustomTooltip;