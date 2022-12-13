import React from "react";

const Ingredients = ({ acf }) => {
  return (
    <>
      <b>Ingredients</b>
      <div dangerouslySetInnerHTML={{ __html: acf.ingredients }} />
      <br />
    </>
  );
};

export default Ingredients;
