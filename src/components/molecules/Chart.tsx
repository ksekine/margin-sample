import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

type Data = {
  currentRate: number
  marginMaintenanceRate: number
}

const Chart: React.FC<{data: Data[]}> = props => {
  return (
    <>
      <BarChart
        width={730}
        height={350}
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="marginMaintenanceRate" label="証拠金維持率" />
        <YAxis label="レート" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar dataKey="currentRate" fill="#8884d8" />
      </BarChart>
    </>
  );
}

export default Chart;