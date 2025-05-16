export interface QueryMetric {
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}
export interface TimeSeriesData {
  date: string;
  clicks: number;
  impressions: number;
}
