const toggleRecipe = (e) => {
  // Only triggers if user clicks on the recipe title
  if (!e.target.classList.contains("recipe-title")) return;
  const articleEl = e.target.parentNode;
  const recipeEl = articleEl.querySelector(".recipe");
  if (!recipeEl) return;

  // Open the recipe element if it is closed
  if (recipeEl.style.height === "0px") {
    recipeEl.style.display = "block";
    recipeEl.style.height = `${recipeEl.scrollHeight}px`;
    // Underline the title
    e.target.classList.add("active");
  } else {
    recipeEl.style.height = "0px";
    // Remove the title underline
    e.target.classList.remove("active");
  }
};

export default toggleRecipe;
