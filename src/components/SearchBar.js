import React from "react";
import { useNavigate } from "react-router-dom";
// Styled
import styled from "styled-components";

const StyledSearchBar = styled.input`
  border: 1px solid black;
  font-size: 1.5rem;
  height: 50px;
  margin: 1rem 0;
  outline: none;
  padding: 0 0 0 5px;
  position: sticky;
  width: 100%;
  z-index: 100;
  &::placeholder {
    font-family: "Frank Ruhl Libre", serif;
    color: black;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    height: 2.5rem;
  }
`;

const SearchBar = () => {
  const navigate = useNavigate();
  return (
    <StyledSearchBar
      type="search"
      placeholder="Search"
      onKeyDown={(e) => {
        const query = e.target.value;
        if (e.key === "Enter" && query.length) {
          // Replace spaces in search queries with dashes to prevent errors
          navigate(`/search/${query.split(" ").join("-")}`);
        }
      }}
    />
  );
};

export default SearchBar;
