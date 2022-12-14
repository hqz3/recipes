import React from "react";

const Time = ({ acf }) => {
  return (
    <>
      <div>
        <b>Time</b> <span dangerouslySetInnerHTML={{ __html: acf.time }} />
      </div>
      <br />
    </>
  );
};

export default Time;
