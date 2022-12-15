import React from "react";

const PDF = ({ acf }) => {
  return (
    <>
      <form action={acf.pdf.mediaItemUrl}>
        <input type="submit" value="PDF" />
      </form>
      <br />
    </>
  );
};

export default PDF;
