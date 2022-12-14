import { gql } from "graphql-tag";

export const GET_ALL_CATEGORIES = gql`
  query {
    categories(
      first: 99999
      where: { exclude: "1", orderby: NAME, order: ASC }
    ) {
      edges {
        node {
          categoryId
          name
          slug
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
          postId
          title
          slug
          acf {
            picture {
              sourceUrl(size: LARGE)
            }
            classification
            time
            serving
            ingredients
            steps
            source
            pdf {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

export const GET_SEARCH = gql`
  query ($query: String!) {
    posts(where: { search: $query }, first: 99999) {
      edges {
        node {
          postId
          title
          acf {
            picture {
              sourceUrl(size: LARGE)
            }
            classification
            time
            serving
            ingredients
            steps
            source
            pdf {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;
