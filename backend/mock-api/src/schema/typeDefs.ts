import { gql } from 'graphql-tag';


export const typeDefs = gql`
  enum SortBy {
    CLICKS_DESC
    CLICKS_ASC
    IMPRESSIONS_DESC
    IMPRESSIONS_ASC
    CTR_DESC
    CTR_ASC
    POSITION_ASC
    POSITION_DESC
  }

  type QueryMetric {
    query: String!
    clicks: Int!
    impressions: Int!
    ctr: Float!
    position: Float!
  }

  type TimeSeriesData {
    date: String!
    clicks: Int!
    impressions: Int!
  }

  type SearchAnalytics {
    topQueries(limit: Int, sortBy: SortBy): [QueryMetric!]!
    timeSeries(query: String, dimensions: [String!]!): [TimeSeriesData!]!
  }

  type Query {
    searchAnalytics(startDate: String!, endDate: String!, filter: String): SearchAnalytics!
  }
`;
