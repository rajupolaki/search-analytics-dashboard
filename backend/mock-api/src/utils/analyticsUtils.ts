// Type for raw data points (used for timeSeries)
export type DataPoint = {
  date: string;
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

// Type for aggregated top queries
export type QueryMetric = {
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

export function getTopQueries(
  data: DataPoint[],
  startDate: string,
  endDate: string,
  filter: string | undefined,
  limit: number,
  sortBy: string
): QueryMetric[] {
  const agg = new Map<string, QueryMetric>();

  data.forEach((entry: DataPoint) => {
    if (entry.date < startDate || entry.date > endDate) return;
    if (filter && !entry.query.toLowerCase().includes(filter.toLowerCase())) return;

    const prev = agg.get(entry.query) || {
      query: entry.query,
      clicks: 0,
      impressions: 0,
      ctr: 0,
      position: 0,
    };

    const updated: QueryMetric = {
      query: entry.query,
      clicks: prev.clicks + entry.clicks,
      impressions: prev.impressions + entry.impressions,
      ctr: 0,
      position: 0,
    };

    updated.ctr = updated.impressions ? updated.clicks / updated.impressions : 0;
    updated.position =
      prev.position === 0 ? entry.position : (prev.position + entry.position) / 2;

    agg.set(entry.query, updated);
  });

  const result = Array.from(agg.values());

  result.sort((a, b) => {
    switch (sortBy) {
      case 'CLICKS_DESC':
        return b.clicks - a.clicks;
      case 'CLICKS_ASC':
        return a.clicks - b.clicks;
      case 'IMPRESSIONS_DESC':
        return b.impressions - a.impressions;
      case 'IMPRESSIONS_ASC':
        return a.impressions - b.impressions;
      case 'CTR_DESC':
        return b.ctr - a.ctr;
      case 'CTR_ASC':
        return a.ctr - b.ctr;
      case 'POSITION_ASC':
        return a.position - b.position;
      case 'POSITION_DESC':
        return b.position - a.position;
      default:
        return 0;
    }
  });

  return result.slice(0, limit);
}

export function getTimeSeriesData(
  data: DataPoint[],
  startDate: string,
  endDate: string,
  query: string
) {
  const grouped: Record<string, { clicks: number; impressions: number }> = {};

  data.forEach((entry: DataPoint) => {
    if (entry.date < startDate || entry.date > endDate) return;
    if (entry.query !== query) return;

    if (!grouped[entry.date]) {
      grouped[entry.date] = { clicks: 0, impressions: 0 };
    }

    grouped[entry.date].clicks += entry.clicks;
    grouped[entry.date].impressions += entry.impressions;
  });

  return Object.entries(grouped).map(([date, values]) => ({
    date,
    clicks: values.clicks,
    impressions: values.impressions,
  }));
}
