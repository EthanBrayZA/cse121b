// Function to fetch recipes from the JSON file
async function fetchRecipes() {
  const response = await fetch("scripts/recipe.json"); 
  return await response.json();
}

// Function to search recipes based on user input
async function searchRecipes() {
  const query = document.getElementById("ingredients").value.toLowerCase();
  const recipes = await fetchRecipes();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = '';

  const filteredRecipes = recipes.filter(recipe => {
      const ingredients = recipe.ingredients.map(ingredient => ingredient.toLowerCase());
      return ingredients.includes(query);
  });

  if (filteredRecipes.length === 0) {
      resultsContainer.textContent = "No matching recipes found.";
      return;
  }

  filteredRecipes.forEach(recipe => {
      const recipeCard = document.createElement("div");
      recipeCard.className = 'recipe-card';

      const title = document.createElement("h2");
      title.textContent = recipe.title;

      const ingredientsList = document.createElement("ul");
      recipe.ingredients.forEach(ingredient => {
          const listItem = document.createElement("li");
          listItem.textContent = ingredient;
          ingredientsList.appendChild(listItem);
      });

      const instructions = document.createElement("p");
      instructions.textContent = `Instructions: ${recipe.instructions}`;

      const image = document.createElement("img");
      image.src = recipe.image;
      image.alt = recipe.title;

      recipeCard.appendChild(title);
      recipeCard.appendChild(ingredientsList);
      recipeCard.appendChild(instructions);
      recipeCard.appendChild(image);

      resultsContainer.appendChild(recipeCard);
  });
}

// Call the searchRecipes function when the page is loaded
window.onload = searchRecipes;