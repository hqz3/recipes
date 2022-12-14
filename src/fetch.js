import { GraphQLClient, request } from "graphql-request";
import { GET_ALL_CATEGORIES, GET_RECIPES, GET_SEARCH } from "./graphql/queries";

export const getAllCategories = async () => {
  const {
    categories: { edges: data },
  } = await request(
    process.env.REACT_APP_WORDPRESS_API_URL,
    GET_ALL_CATEGORIES
  );

  const filtered = {};

  // Filter out food groups
  const groups = data.filter((item) => {
    return item.node.parent === null;
  });
  filtered["groups"] = [];
  filtered["idToSlug"] = {};

  groups.forEach((item) => {
    filtered.groups.push({
      categoryId: item.node.categoryId,
      name: item.node.name,
      slug: item.node.slug,
    });
    filtered.idToSlug[item.node.categoryId] = item.node.slug;
    filtered[item.node.slug] = [];
  });

  // Link food subgroups to food groups
  for (let item of data) {
    if (item.node.parent !== null) {
      const parentSlug = filtered.idToSlug[item.node.parent.node.categoryId];
      filtered[parentSlug].push({
        categoryId: item.node.categoryId,
        name: item.node.name,
        slug: item.node.slug,
      });
    }
  }

  return filtered;
};

export const getRecipes = async (id, signal) => {
  const graphQLClient = new GraphQLClient(
    process.env.REACT_APP_WORDPRESS_API_URL,
    { signal }
  );
  return await graphQLClient.request(GET_RECIPES, { id });
};

export const getSearch = async (query, signal) => {
  const graphQLClient = new GraphQLClient(
    process.env.REACT_APP_WORDPRESS_API_URL,
    { signal }
  );
  return await graphQLClient.request(GET_SEARCH, { query });
};
