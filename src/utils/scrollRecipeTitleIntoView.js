const scrollRecipeTitleIntoView = (e) => {
  const recipeTitleEl = e.target.parentNode.querySelector(".recipe-title");
  recipeTitleEl.scrollIntoView({
    behavior: "smooth",
  });
};

export default scrollRecipeTitleIntoView;
