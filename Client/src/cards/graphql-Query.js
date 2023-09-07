import { gql } from "@apollo/client";
export const AllCards = gql`
  query (
    $limit: Int
    $page: String
    $type: String
    $name: String
    $sort: String
  ) {
    allCards(
      limit: $limit
      page: $page
      type: $type
      name: $name
      sort: $sort
    ) {
      prevPage
      nextPage
      page
      payload {
        name
        price
        discount
        image
        stock
        finalPrice
        _id
      }
    }
  }
`;
