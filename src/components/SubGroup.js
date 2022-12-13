import React from "react";
// Component
import Recipes from "./Recipes";
// React-Router
import { NavLink, Route, Routes } from "react-router-dom";
// Styled
import styled from "styled-components";

const StyledSubGroup = styled.section`
  height: 100%;
  overflow-y: scroll;
  padding: 0 40px 0 40px;
  z-index: 2;
`;

const SubGroup = ({ subGroups }) => {
  return (
    <>
      <StyledSubGroup className="custom-scrollbar expand-right">
        {subGroups.map((subGroup) => {
          return (
            <NavLink key={subGroup.categoryId} to={`${subGroup.slug}`}>
              {subGroup.name}
            </NavLink>
          );
        })}
      </StyledSubGroup>
      <Routes>
        {subGroups.map((subGroup) => {
          return (
            <Route
              key={subGroup.categoryId}
              path={`${subGroup.slug}/*`}
              element={
                <Recipes
                  key={subGroup.categoryId}
                  subGroupId={subGroup.categoryId}
                />
              }
            />
          );
        })}
      </Routes>
    </>
  );
};

export default SubGroup;
