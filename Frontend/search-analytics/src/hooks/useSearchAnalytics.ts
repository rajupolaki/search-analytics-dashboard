import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import type { QueryMetric, TimeSeriesData } from '../types';

export const GET_SEARCH_ANALYTICS = gql`
  query GetSearchAnalytics($startDate: String!, $endDate: String!, $filter: String) {
    searchAnalytics(startDate: $startDate, endDate: $endDate, filter: $filter) {
      topQueries(limit: 20, sortBy: CLICKS_DESC) {
        query
        clicks
        impressions
        ctr
        position
      }
      timeSeries(query: $filter, dimensions: ["date"]) {
        date
        clicks
        impressions
      }
    }
  }
`;

interface UseSearchAnalyticsArgs {
  startDate: string;
  endDate: string;
  filter: string;
}

interface UseSearchAnalyticsResult {
  loading: boolean;
  error?: Error;
  topQueries: QueryMetric[];
  timeSeries: TimeSeriesData[];
}

export const useSearchAnalytics = ({
  startDate,
  endDate,
  filter,
}: UseSearchAnalyticsArgs): UseSearchAnalyticsResult => {
  const { data, loading, error } = useQuery(GET_SEARCH_ANALYTICS, {
    variables: { startDate, endDate, filter },
  });

  return {
    loading,
    error,
    topQueries: data?.searchAnalytics?.topQueries ?? [],
    timeSeries: data?.searchAnalytics?.timeSeries ?? [],
  };
};
