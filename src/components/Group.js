import React from "react";
// Component
import Search from "./Search";
import SubGroup from "./SubGroup";
// React-Router
import { Routes, Route, NavLink } from "react-router-dom";
// Styled
import styled from "styled-components";

const StyledGroup = styled.section`
  background-color: white;
  height: 100%;
  overflow-y: scroll;
  padding: var(--column-padding);
  z-index: 3;
`;

const Group = ({ data }) => {
  return (
    <>
      <StyledGroup className="custom-scrollbar">
        {data.groups.map((group) => {
          return (
            <NavLink key={group.categoryId} to={`${group.slug}`}>
              {group.name}
            </NavLink>
          );
        })}
      </StyledGroup>
      <Routes>
        {data.groups.map((group) => (
          <Route
            key={group.categoryId}
            path={`${group.slug}/*`}
            element={
              <SubGroup key={group.categoryId} subGroups={data[group.slug]} />
            }
          />
        ))}
        <Route path="search/:query/*" element={<Search />} />
      </Routes>
    </>
  );
};

export default Group;
