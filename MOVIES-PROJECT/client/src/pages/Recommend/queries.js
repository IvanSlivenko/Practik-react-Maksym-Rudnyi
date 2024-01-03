import {
  gql
} from "@apollo/client";

export const MOVIES_BY_IDS_QUERY = gql`
  query MoviesByIds($ids: [Int]) {
    movies(ids: $ids) {
      page
      totalResults
      totalPages
      results {
        id
        title
        image: posterPath
        releaseDate(format: "dd.MM.yyyy")
      }
    }
  }
`;