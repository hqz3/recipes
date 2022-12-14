import React, { useEffect } from "react";
// Component
import NotFound from "./NotFound";
import Recipe from "./Recipe";
import Spinner from "./Spinner";
// React-Query
import { useQuery } from "react-query";
import { getSearch } from "../fetch";
// React-Router
import { Routes, Route, NavLink, useParams } from "react-router-dom";
// Styled
import styled from "styled-components";
// Utils
import toggleRecipe from "../utils/toggleRecipe";
import setDisplayNone from "../utils/setDisplayNone";

const StyledSearch = styled.section`
  overflow-y: scroll;
  padding: var(--column-padding);
  width: 100%;
  word-wrap: normal;
  z-index: 1;
`;

const Search = () => {
  const { query } = useParams();
  const cleanedQuery = query.split("-").join(" ");

  const { isFetching, data, refetch } = useQuery("search", ({ signal }) =>
    getSearch(cleanedQuery, signal)
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cleanedQuery]);

  if (isFetching) {
    return <Spinner />;
  }

  const {
    posts: { edges: recipes },
  } = data;

  if (recipes.length === 0) {
    return <NotFound />;
  }

  return (
    <StyledSearch
      className="custom-scrollbar expand-right"
      onClick={toggleRecipe}
      onTransitionEnd={setDisplayNone}
    >
      {recipes.map((recipe, idx) => (
        <article key={recipe.node.postId}>
          <NavLink
            className="recipe-title"
            to={`${recipe.node.postId}`}
            data-classification={recipe.node.acf.classification}
          >
            {recipe.node.title}
          </NavLink>
          <Routes>
            <Route
              path={`${recipe.node.postId}`}
              element={<Recipe recipe={recipes[idx]} />}
            />
          </Routes>
        </article>
      ))}
    </StyledSearch>
  );
};

export default Search;
