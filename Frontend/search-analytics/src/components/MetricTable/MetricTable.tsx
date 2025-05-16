// src/components/MetricTable.tsx
import React from 'react';
import type { QueryMetric } from '../../types';


interface MetricTableProps {
  data: QueryMetric[];
  onRowClick: (query: string) => void;
}

export const MetricTable: React.FC<MetricTableProps> = ({ data, onRowClick }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
      <thead>
        <tr>
          <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Query</th>
          <th style={{ borderBottom: '1px solid #ccc', textAlign: 'right' }}>Clicks</th>
          <th style={{ borderBottom: '1px solid #ccc', textAlign: 'right' }}>Impressions</th>
          <th style={{ borderBottom: '1px solid #ccc', textAlign: 'right' }}>CTR (%)</th>
          <th style={{ borderBottom: '1px solid #ccc', textAlign: 'right' }}>Position</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr
            key={row.query}
            onClick={() => onRowClick(row.query)}
            style={{ cursor: 'pointer', borderBottom: '1px solid #eee' }}
          >
            <td>{row.query}</td>
            <td style={{ textAlign: 'right' }}>{row.clicks}</td>
            <td style={{ textAlign: 'right' }}>{row.impressions}</td>
            <td style={{ textAlign: 'right' }}>{(row.ctr * 100).toFixed(2)}</td>
            <td style={{ textAlign: 'right' }}>{row.position.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
