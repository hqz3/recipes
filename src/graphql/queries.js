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

export const GET_RECIPES = gql`
  query ($id: Int!) {
    posts(
      first: 99999
      where: { categoryId: $id, orderby: { field: TITLE, order: ASC } }
    ) {
      edges {
        node {
          title
          slug
          acf {
            classification
            ingredients
            pdf {
              mediaItemUrl
            }
            picture {
              sourceUrl(size: LARGE)
            }
            serving
            source
            steps
            time
          }
          postId
        }
      }
    }
  }
`;
