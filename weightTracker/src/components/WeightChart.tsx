import { LineChart, Line, ReferenceLine, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CustomTooltip from "./CustomTooltip";
import {
    Box
} from '@mui/material';

const WeightChart = ({ data, name }: { data: WeightData[], name: string }) => {
    return (
        <Box
            sx={{
                height: 600,
                width: 1300,
                p: 2,
            }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <Line
                        dataKey="kcal_500_deficit"
                        type="monotone"
                        stroke="magenta"
                        fillOpacity={1}
                        strokeWidth={1.5}
                        dot={false}
                    />
                    <Line
                        dataKey="kcal_1000_deficit"
                        type="monotone"
                        stroke="lime"
                        fillOpacity={1}
                        strokeWidth={1.5}
                        dot={false}
                    />
                    <Line
                        dataKey="fasted"
                        type="monotone"
                        stroke="yellow"
                        fillOpacity={1}
                        strokeWidth={1.5}
                        dot={false}
                    />
                    <Line
                        dataKey="actual_weight"
                        type="monotone"
                        stroke="#4DFFFF"
                        fillOpacity={1}
                        strokeWidth={1.5}
                        dot={false}
                        connectNulls={true}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <XAxis dataKey={"timestamp"} stroke="#312e81" tickCount={5} />
                    <YAxis domain={[75, 82]} stroke="#312e81" dy={-5} label={{ value: 'Weight (Kg)', angle: -90, position: 'insideLeft' }} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};
export default WeightChart;