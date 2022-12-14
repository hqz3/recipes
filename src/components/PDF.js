import React from "react";
import styled from "styled-components";

const StyledPDF = styled.form`
  input {
    background-color: white;
    border: 0.5px solid black;
    border-radius: 5px;
    padding: 5px;
  }

  input:hover {
    cursor: pointer;
  }
`;

const PDF = ({ acf }) => {
  return (
    <>
      <StyledPDF action={acf.pdf.mediaItemUrl}>
        <input type="submit" value="PDF" />
      </StyledPDF>
      <br />
    </>
  );
};

export default PDF;
