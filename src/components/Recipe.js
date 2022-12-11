import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledRecipe = styled.div`
  cursor: default;
  font-size: var(--recipe-font-size);
  height: 0px;
  overflow: hidden;
  padding: 0;
  transition: height 0.15s linear;
`;

const Recipe = ({ id, recipes }) => {
  const recipe = recipes[id];
  const { ingredients, steps, source } = recipe;
  const recipeEl = useRef();

  useEffect(() => {
    const height = recipeEl.current.scrollHeight;
    recipeEl.current.style.height = `${height}px`;
  }, []);

  return (
    <StyledRecipe className="recipe" ref={recipeEl}>
      <p>{ingredients}</p>
      <br />
      <p>{steps}</p>
      <br />
      <p>{source}</p>
    </StyledRecipe>
  );
};

export default Recipe;
