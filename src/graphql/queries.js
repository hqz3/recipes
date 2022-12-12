import { gql } from "graphql-tag";

export const GET_ALL_CATEGORIES = gql`
  query {
    categories(
      first: 99999
      where: { exclude: "1", orderby: NAME, order: ASC }
    ) {
      edges {
        node {
          name
          slug
          categoryId
          parent {
            node {
              categoryId
            }
          }
        }
      }
    }
  }
`;

export const GET_POSTS = gql`
  query ($categoryId: Int!) {
    posts(
      first: 99999
      where: { categoryId: $categoryId, orderby: { field: TITLE, order: ASC } }
    ) {
      edges {
        node {
          id
          title
          slug
          recipe {
            classification
            ingredients
            pdf {
              mediaItemUrl
            }
            picture {
              sourceUrl(size: MEDIUM)
            }
            serving
            source
            steps
            time
          }
        }
      }
    }
  }
`;
