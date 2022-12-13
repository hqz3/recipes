import React, { useEffect, useRef } from "react";
// Component
import Image from "./Image";
import Time from "./Time";
import Serving from "./Serving";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import PDF from "./PDF";
import Source from "./Source";
// Styled
import styled from "styled-components";

const StyledRecipe = styled.div`
  cursor: default;
  font-size: var(--recipe-font-size);
  height: 0px;
  overflow: hidden;
  padding: 0;
  transition: height 0.25s ease-in-out;
`;

const Recipe = ({ recipe }) => {
  const recipeEl = useRef();
  useEffect(() => {
    const height = recipeEl.current.scrollHeight;
    recipeEl.current.style.height = `${height}px`;
  }, []);

  // Destructure WordPress's Advanced Custom Fields
  const {
    node: { acf },
  } = recipe;

  return (
    <StyledRecipe className="recipe" ref={recipeEl}>
      {acf.picture && <Image acf={acf} />}
      {acf.time && <Time acf={acf} />}
      {acf.serving && <Serving acf={acf} />}
      <Ingredients acf={acf} />
      <Steps acf={acf} />
      <PDF acf={acf} />
      <Source acf={acf} />
    </StyledRecipe>
  );
};

export default Recipe;
