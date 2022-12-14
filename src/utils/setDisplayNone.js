const setDisplayNone = (e) => {
  if (e.target.style.height === "0px") {
    e.target.style.display = "none";
  }
};

export default setDisplayNone;
