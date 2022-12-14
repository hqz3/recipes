import React, { useEffect, useState } from "react";
// Component
import Recipes from "./Recipes";
// React-Router
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
// Styled
import styled from "styled-components";

const StyledSubGroup = styled.section`
  background-color: white;
  height: 100%;
  overflow-y: scroll;
  padding: var(--column-padding);
  z-index: 2;

  @media screen and (max-width: 768px) {
    padding-left: 5px;
    width: 100%;
    &[data-hidden="true"] {
      display: none;
    }

    i {
      display: inline-block;
    }
  }
`;

const SubGroup = ({ setSubGroupOpen, subGroups }) => {
  const navigate = useNavigate();
  const [recipesOpen, setRecipesOpen] = useState(false);

  useEffect(() => {
    setSubGroupOpen(true);
    return () => setSubGroupOpen(false);
  }, []);

  return (
    <>
      <StyledSubGroup
        className="custom-scrollbar expand-right"
        data-hidden={recipesOpen}
      >
        <i
          className="fa-solid fa-chevron-left"
          onClick={() => navigate("../")}
        />
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
                  setRecipesOpen={setRecipesOpen}
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
