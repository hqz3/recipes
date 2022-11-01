import React from "react";
// Styled
import styled from "styled-components";

const StyledSearchBar = styled.input`
  border: 1px solid black;
  font-size: 1.5rem;
  grid-row: 2;
  height: 50px;
  margin: 1rem 0;
  outline: none;
  padding: 0 1rem;
  position: sticky;
  width: 100%;
  z-index: 100;
  &::placeholder {
    font-family: "EB Garamond", serif;
    color: black;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    height: 2.5rem;
  }
`;

const SearchBar = () => {
  return <StyledSearchBar placeholder="Search" />;
};

export default SearchBar;
