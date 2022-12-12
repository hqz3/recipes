import React, { useRef, useState } from "react";
// Component
import Type from "./Type";
// React-Router
import { Routes, Route, NavLink } from "react-router-dom";
// Styled
import styled from "styled-components";

const StyledGroup = styled.div`
  /* border: 1px solid green; */
  background-color: var(--column-background-color);
  height: 100%;
  overflow-y: scroll;
  padding: 0 40px 0 40px;
  z-index: 3;
`;

const Group = ({ data }) => {
  const [reload, setReload] = useState(false);
  const prevGroup = useRef();

  return (
    <>
      <StyledGroup className="custom-scrollbar">
        {data.groups.map((group) => {
          return (
            <NavLink
              key={group.categoryId}
              to={`/${group.slug}`}
              onClick={() => {
                // Reload component if viewing a different food group
                if (group.categoryId !== prevGroup.current) {
                  prevGroup.current = group.categoryId;
                  setReload(!reload);
                }
              }}
            >
              {group.name}
            </NavLink>
          );
        })}
      </StyledGroup>
      <Routes>
        <Route path=":group/*" element={<Type key={reload} data={data} />} />
      </Routes>
    </>
  );
};

export default Group;
