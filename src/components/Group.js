import React, { useState } from "react";
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
  padding-left: 5px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    width: 100%;
    &[data-hidden="true"] {
      display: none;
    }
  }
`;

const Group = ({ data }) => {
  const [subGroupOpen, setSubGroupOpen] = useState(false);

  return (
    <>
      <StyledGroup className="custom-scrollbar" data-hidden={subGroupOpen}>
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
              <SubGroup
                key={group.categoryId}
                setSubGroupOpen={setSubGroupOpen}
                subGroups={data[group.slug]}
              />
            }
          />
        ))}
        <Route path="search/:query/*" element={<Search />} />
      </Routes>
    </>
  );
};

export default Group;
