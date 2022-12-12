import React from "react";
import styled from "styled-components";

const StyledNotFound = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <h3>404 - Not Found</h3>
    </StyledNotFound>
  );
};

export default NotFound;
