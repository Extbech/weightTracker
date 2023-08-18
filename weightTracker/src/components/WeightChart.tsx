import { LineChart, Line, ReferenceLine, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CustomTooltip from "./CustomTooltip";
import Card from "./Card";
export interface IResponse {
    name: string,
    timestamp: Date,
    actual_weight: number,
    max_weight_loss_1: number,
    max_weight_loss_2: number,
    max_weight_loss_3: number,
    max_weight_loss_4: number,
    max_weight_loss_5: number,
    kcal_500_deficit: number,
    kcal_1000_deficit: number
}
const WeightChart = ({ data, name }: { data: IResponse[], name: string }) => {
    return (
        <Card>
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
                    <YAxis domain={[60, 85]} stroke="#312e81" ticks={[60, 65, 70, 75, 80, 85]} dy={-5} label={{ value: 'Weight (Kg)', angle: -90, position: 'insideLeft' }} />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    );
};
export default WeightChart;