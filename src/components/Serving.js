import React from "react";

const Serving = ({ acf }) => {
  return (
    <>
      <div>
        <b>Serving</b>{" "}
        <span dangerouslySetInnerHTML={{ __html: acf.serving }} />
      </div>
      <br />
    </>
  );
};

export default Serving;
