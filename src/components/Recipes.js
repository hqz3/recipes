import React from "react";
// Component
import Recipe from "./Recipe";
import Spinner from "./Spinner";
// React-Query
import { useQuery } from "react-query";
import { getRecipes } from "../fetch.js";
// React-Router
import { Routes, Route, NavLink } from "react-router-dom";
// Styled
import styled from "styled-components";

const StyledRecipes = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: scroll;
  padding: 0 40px 0 40px;
  word-wrap: normal;
  z-index: 1;
`;

const Recipes = ({ subGroupId }) => {
  const { isFetching, data } = useQuery("recipes", () =>
    getRecipes(subGroupId)
  );

  if (isFetching) {
    return <Spinner />;
  }

  const {
    posts: { edges: recipes },
  } = data;

  const toggleRecipe = (e) => {
    // Only triggers if user clicks on the recipe title
    if (!e.target.classList.contains("recipe-title")) return;
    const articleEl = e.target.parentNode;
    const recipeEl = articleEl.querySelector(".recipe");
    if (!recipeEl) return;

    // Open the recipe element if it is closed
    if (recipeEl.style.height === "0px") {
      recipeEl.style.display = "block";
      // Underline the title
      e.target.classList.add("active");
      setTimeout(() => {
        recipeEl.style.height = `${recipeEl.scrollHeight}px`;
      }, 0);
    } else {
      recipeEl.style.height = "0px";
      // Remove the title underline
      e.target.classList.remove("active");
    }
  };

  const setDisplayNone = (e) => {
    if (e.target.style.height === "0px") {
      e.target.style.display = "none";
    }
  };

  return (
    <StyledRecipes
      className="custom-scrollbar expand-right"
      onClick={toggleRecipe}
      onTransitionEnd={setDisplayNone}
    >
      {recipes.map((recipe, idx) => {
        return (
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
        );
      })}
    </StyledRecipes>
  );
};

export default Recipes;
