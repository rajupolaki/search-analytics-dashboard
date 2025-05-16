import { mockData } from '../data/mockAnalytics.js';
import { getTopQueries, getTimeSeriesData } from '../utils/analyticsUtils.js';

interface SearchAnalyticsArgs {
  startDate: string;
  endDate: string;
  filter?: string;
}

interface TopQueriesArgs {
  limit?: number;
  sortBy?: string;
}

interface TimeSeriesArgs {
  query: string;
  dimensions: string[]; // If unused, can be omitted or marked optional
}

export const resolvers = {
  Query: {
    searchAnalytics: (_parent: any, args: SearchAnalyticsArgs) => {
      const { startDate, endDate, filter } = args;

      return {
        topQueries: (args: TopQueriesArgs) =>
          getTopQueries(mockData, startDate, endDate, filter, args.limit ?? 20, args.sortBy ?? 'CLICKS_DESC'),
        timeSeries: ({ query }: TimeSeriesArgs) =>
          getTimeSeriesData(mockData, startDate, endDate, query),
      };
    },
  },
};
