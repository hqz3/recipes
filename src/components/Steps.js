import React from "react";

const Steps = ({ acf }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: acf.steps }} />
      <br />
    </>
  );
};

export default Steps;
