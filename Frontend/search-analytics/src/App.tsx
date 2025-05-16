import  { useState } from 'react';
import { getToday, getNDaysAgo } from './utils/dateUtils';
import { DateRangePicker } from './components/DateRangePicker/DateRangePicker.tsx';
import { useSearchAnalytics } from './hooks/useSearchAnalytics';
import { MetricTable } from './components/MetricTable/MetricTable.tsx';
import { DetailChart } from './components/DetailChart/DetailChart.tsx';

const defaultStartDate = getNDaysAgo(30);
const defaultEndDate = getToday();

export const App = () => {
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [filter, setFilter] = useState('');
  const [selectedQuery, setSelectedQuery] = useState<string | null>(null);

  const { loading, error, topQueries, timeSeries } = useSearchAnalytics({
    startDate,
    endDate,
    filter,
  });

  return (
    <div style={{ padding: '1rem', maxWidth: '900px', margin: 'auto' }}>
      <h1>Search Analytics Dashboard</h1>

      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />

      <input
        type="text"
        placeholder="Filter queries"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{ marginBottom: '1rem', width: '100%', padding: '0.5rem' }}
      />

      {loading && <p>Loading...</p>}
      {error && <p>Error loading data</p>}

      {!loading && !error && (
        <>
          <MetricTable data={topQueries} onRowClick={setSelectedQuery} />
          {selectedQuery && (
            <>
              <h2>Details for: {selectedQuery}</h2>
              <DetailChart data={timeSeries} />
            </>
          )}
        </>
      )}
    </div>
  );
};
