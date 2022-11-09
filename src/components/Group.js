import React from "react";
import Type from "./Type";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const StyledGroup = styled.div`
  height: 100%;
  min-width: 200px;
  max-width: 300px;
  margin: 0;
  padding: 0;
  overflow-y: scroll;

  a {
    color: var(--black);
    display: block;
    margin: var(--margin);
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
