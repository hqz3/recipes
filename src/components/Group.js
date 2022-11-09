import React from "react";
import Type from "./Type";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const StyledGroup = styled.div`
  background-color: var(--column-background-color);
  height: 100%;
  min-width: 200px;
  max-width: 300px;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  z-index: 3;

  a {
    color: var(--font-color);
    display: block;
    margin: var(--link-margin);
    text-decoration: none;
  }
`;

const Group = ({ data }) => {
  return (
    <>
      <StyledGroup className="custom-scrollbar">
        {Object.keys(data).map((group, idx) => {
          return (
            <Link key={idx} to={`/${group}`}>
              {group}
            </Link>
          );
        })}
      </StyledGroup>
      <Outlet />
      <Routes>
        <Route path=":group/*" element={<Type data={data} />} />
      </Routes>
    </>
  );
};

export default Group;
