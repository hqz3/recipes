import React from "react";

const Time = ({ acf }) => {
  return (
    <>
      <b>Time</b>
      <div dangerouslySetInnerHTML={{ __html: acf.time }} />
      <br />
    </>
  );
};

export default Time;
