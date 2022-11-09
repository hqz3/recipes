import React, { useRef } from "react";
import Recipes from "./Recipes";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledType = styled.div`
  background-color: var(--column-background-color);
  height: 100%;
  min-width: 200px;
  max-width: 250px;
  overflow-y: scroll;
  z-index: 2;

  a {
    color: var(--font-color);
    display: block;
    margin: var(--link-margin);
    text-decoration: none;
  }
  a.active {
    text-decoration: underline;
  }
`;

const Type = ({ data }) => {
  const { group } = useParams();
  const typeEl = useRef(null);

  // TODO: create NotFound component
  if (!data[group]) {
    return <div>NOT FOUND</div>;
  }
  const types = data[group];

  return (
    <>
      <StyledType className="custom-scrollbar expand-right" ref={typeEl}>
        {Object.keys(types).map((type, idx) => {
          return (
            <NavLink key={idx} to={`/${group}/${type}`}>
              {type}
            </NavLink>
          );
        })}
      </StyledType>
      <Routes>
        <Route path=":type/*" element={<Recipes types={types} />} />
      </Routes>
    </>
  );
};

export default Type;
