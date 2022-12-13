import React from "react";
// Component
import Search from "./Search";
import Type from "./Type";
// React-Router
import { Routes, Route, NavLink } from "react-router-dom";
// Styled
import styled from "styled-components";
import NotFound from "./NotFound";

const StyledGroup = styled.section`
  border: 1px solid green;
  background-color: var(--column-background-color);
  height: 100%;
  overflow-y: scroll;
  padding: 0 40px 0 40px;
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
            element={<Type key={group.categoryId} types={data[group.slug]} />}
          />
        ))}
        <Route path="search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Group;
