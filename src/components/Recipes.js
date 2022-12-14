import React, { useEffect } from "react";
// Component
import Recipe from "./Recipe";
import Spinner from "./Spinner";
// React-Query
import { useQuery } from "react-query";
import { getRecipes } from "../fetch.js";
// React-Router
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
// Styled
import styled from "styled-components";
// Utils
import toggleRecipe from "../utils/toggleRecipe";
import setDisplayNone from "../utils/setDisplayNone";

const StyledRecipes = styled.section`
  flex: 1;
  overflow-y: scroll;
  padding: var(--column-padding);
  word-wrap: normal;
  z-index: 1;

  i {
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding-left: 5px;
    width: 100%;

    i {
      display: block;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Recipes = ({ setRecipesOpen, subGroupId }) => {
  const navigate = useNavigate();
  const { isFetching, data } = useQuery("recipes", ({ signal }) =>
    getRecipes(subGroupId, signal)
  );

  useEffect(() => {
    setRecipesOpen(true);
    return () => setRecipesOpen(false);
  }, []);

  if (isFetching) {
    return <Spinner />;
  }

  const {
    posts: { edges: recipes },
  } = data;

  return (
    <StyledRecipes
      className="custom-scrollbar expand-right"
      onClick={toggleRecipe}
      onTransitionEnd={setDisplayNone}
    >
      <i className="fa-solid fa-chevron-left" onClick={() => navigate("../")} />
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
    </StyledRecipes>
  );
};

export default Recipes;
