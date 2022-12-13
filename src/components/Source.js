import React from "react";

const Source = ({ acf }) => {
  return (
    <>
      <b>Source</b>
      {acf.source && (
        <a className="source" href={acf.source}>
          {acf.source}
        </a>
      )}
    </>
  );
};

export default Source;
