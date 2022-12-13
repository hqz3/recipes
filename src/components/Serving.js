import React from "react";

const Serving = ({ acf }) => {
  return (
    <>
      <b>Serving</b>
      <div dangerouslySetInnerHTML={{ __html: acf.serving }} />
      <br />
    </>
  );
};

export default Serving;
