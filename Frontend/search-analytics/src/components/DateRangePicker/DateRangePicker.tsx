// src/components/DateRangePicker.tsx
import React from 'react';

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <label>
        Start Date:{' '}
        <input
          type="date"
          value={startDate}
          onChange={e => onStartDateChange(e.target.value)}
        />
      </label>
      <label>
        End Date:{' '}
        <input
          type="date"
          value={endDate}
          onChange={e => onEndDateChange(e.target.value)}
        />
      </label>
    </div>
  );
};
