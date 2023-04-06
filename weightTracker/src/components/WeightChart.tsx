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
                    />
                    <Line
                        dataKey="kcal_1000_deficit"
                        type="monotone"
                        stroke="lime"
                        fillOpacity={1}
                        strokeWidth={1.5}
                    />
                    <Line
                        dataKey="fasted"
                        type="monotone"
                        stroke="yellow"
                        fillOpacity={1}
                        strokeWidth={1.5}
                    />
                    <Line
                        dataKey="actual_weight"
                        type="monotone"
                        stroke="#4DFFFF"
                        fillOpacity={1}
                        strokeWidth={1.5}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <XAxis dataKey={"timestamp"} stroke="#312e81" tickCount={5} />
                    <YAxis domain={name == "Benjamin" ? [60, 85] : [90, 115]} stroke="#312e81" tickCount={5} dy={-5} />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    );
};
export default WeightChart;

{/* <div className="">
            <h1>{name}</h1>
            <div>
                <LineChart width={500} height={200} data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    style={{ background: '#D27685' }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'timestamp'} />
                    <YAxis type="number" domain={name == "Benjamin" ? [62, 85] : [94, 120]} tickCount={6} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <ReferenceLine y={name == "Benjamin" ? 80.8 : 113.4} stroke="red" strokeWidth={2} />
                    <Line type="natural" dataKey="kcal_500_deficit" stroke="lime" strokeWidth={2} />
                    <Line type="monotone" dataKey="kcal_1000_deficit" stroke="magenta" strokeWidth={2} />
                    <Line type="natural" dataKey="fasted" stroke="blue" strokeWidth={2} />
                    <Line type="natural" dataKey="actual_weight" stroke="black" strokeWidth={2} />
                </LineChart>
            </div>
        </div> */}