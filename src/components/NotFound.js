import React from "react";
import styled from "styled-components";

const StyledNotFound = styled.section`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <h3>Not Found</h3>
    </StyledNotFound>
  );
};

export default NotFound;
