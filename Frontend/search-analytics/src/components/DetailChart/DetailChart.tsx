// src/components/DetailChart.tsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { TimeSeriesData } from '../../types';

interface DetailChartProps {
  data: TimeSeriesData[];
}

export const DetailChart: React.FC<DetailChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 0 }}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="clicks" stroke="#8884d8" />
        <Line type="monotone" dataKey="impressions" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};
