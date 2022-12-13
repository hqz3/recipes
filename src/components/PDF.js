import React from "react";

const PDF = ({ acf }) => {
  return (
    <>
      <b>PDF</b>
      {acf.pdf && (
        <a className="pdf" href={acf.pdf.mediaItemUrl}>
          {acf.pdf.mediaItemUrl}
        </a>
      )}
      <br />
    </>
  );
};

export default PDF;
