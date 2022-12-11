import React, { useRef, useState } from "react";
import Type from "./Type";
import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledGroup = styled.div`
  border: 1px solid green;
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
        {Object.keys(data).map((group, idx) => {
          return (
            <NavLink
              key={idx}
              to={`/${group}`}
              onClick={() => {
                // Reload the component if viewing a new food group
                if (!prevGroup.current) {
                  prevGroup.current = group;
                } else if (group !== prevGroup.current) {
                  prevGroup.current = group;
                } else return;
                setReload(!reload);
              }}
            >
              {group}
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
