import React from "react";
import Recipe from "./Recipe";
import { useParams, Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledRecipes = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: scroll;
  z-index: 1;

  a {
    color: var(--font-color);
    cursor: pointer;
    display: block;
    overflow: hidden;
    margin: var(--link-margin);
    text-decoration: none;
  }
  a.active {
    text-decoration: underline;
  }
`;

const Recipes = ({ types }) => {
  const { group, type } = useParams();
  const recipes = types[type];

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
      {Object.keys(recipes).map((id, idx) => {
        return (
          <article key={id}>
            <NavLink className="recipe-title" to={`/${group}/${type}/${id}`}>
              {recipes[id].title}
            </NavLink>
            <Routes>
              <Route
                path={`${id}`}
                element={<Recipe id={id} recipes={recipes} />}
              />
            </Routes>
          </article>
        );
      })}
    </StyledRecipes>
  );
};

export default Recipes;
