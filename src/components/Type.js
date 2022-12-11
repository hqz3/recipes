import React, { useRef, useState } from "react";
import Recipes from "./Recipes";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledType = styled.div`
  border: 1px solid orange;
  background-color: var(--column-background-color);
  height: 100%;
  overflow-y: scroll;
  padding: 0 40px 0 40px;
  z-index: 2;
`;

const Type = ({ data }) => {
  const [reload, setReload] = useState(false);
  const prevType = useRef();

  const { group } = useParams();
  // TODO: create NotFound component
  if (!data[group]) {
    return <div>NOT FOUND</div>;
  }
  const types = data[group];

  return (
    <>
      <StyledType className="custom-scrollbar expand-right">
        {Object.keys(types).map((type, idx) => {
          return (
            <NavLink
              key={idx}
              to={`/${group}/${type}`}
              onClick={() => {
                // Reload the component if viewing a new food type
                if (!prevType.current) prevType.current = type;
                else if (type !== prevType.current) {
                  prevType.current = type;
                } else return;
                setReload(!reload);
              }}
            >
              {type}
            </NavLink>
          );
        })}
      </StyledType>
      <Routes>
        <Route
          path=":type/*"
          element={<Recipes key={reload} types={types} />}
        />
      </Routes>
    </>
  );
};

export default Type;
