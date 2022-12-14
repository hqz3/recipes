import React from "react";
import styled from "styled-components";

const StyledSource = styled.form`
  input {
    background-color: white;
    border: 0.5pt solid black;
    border-radius: 5px;
    font-family: "Frank Ruhl Libre", serif;
    padding: 5px;
  }

  input:hover {
    cursor: pointer;
  }
`;

const Source = ({ acf }) => {
  return (
    <StyledSource action={acf.source}>
      <input type="submit" value="SOURCE" />
    </StyledSource>
  );
};

export default Source;
