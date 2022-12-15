const setDisplayNoneIfRecipeClosed = (e) => {
  // If the Recipe component is closed, set display: none
  if (e.target.style.height === "0px") {
    e.target.style.display = "none";
  }
};

export default setDisplayNoneIfRecipeClosed;
