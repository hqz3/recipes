import React, { useEffect, useRef } from "react";
// Component
import Image from "./Image";
import Time from "./Time";
import Serving from "./Serving";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
// Styled
import styled from "styled-components";

const StyledRecipe = styled.section`
  cursor: default;
  font-size: var(--recipe-font-size);
  height: 0px;
  overflow: hidden;
  padding: 0;
  transition: height 0.25s ease-in-out;

  ul,
  li {
    margin-left: -11.5px;
  }

  /* PDF and Source button styling */
  .recipe__buttons {
    display: flex;
    gap: 0.5rem;
  }

  .recipe__buttons a {
    background-color: white;
    border: 0.5pt solid black;
    border-radius: 5px;
    font-family: "Frank Ruhl Libre", Times, serif;
    margin-top: 0;
    padding: 0.25rem;

    &:hover {
      cursor: pointer;
    }
  }
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
      <div className="recipe__buttons">
        {acf.pdf && (
          <a href={acf.pdf.mediaItemUrl} target="_blank" rel="noreferrer">
            PDF
          </a>
        )}
        {acf.source && (
          <a href={acf.source} target="_blank" rel="noreferrer">
            SOURCE
          </a>
        )}
      </div>
    </StyledRecipe>
  );
};

export default Recipe;
