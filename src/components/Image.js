import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  display: block;
  margin-bottom: 1rem;
  height: 300px;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

const Image = ({ acf }) => {
  return <StyledImage src={acf.picture.sourceUrl} />;
};

export default Image;
