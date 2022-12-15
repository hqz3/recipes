import React from "react";

const Source = ({ acf }) => {
  return (
    <form action={acf.source}>
      <input type="submit" value="SOURCE" />
    </form>
  );
};

export default Source;
