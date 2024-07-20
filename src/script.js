function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructions = document.querySelector("#user-instructions").value;
  let apiKey = "16t1b3fa04b8866116ccceb0d2do3a04";
  let prompt = `User instructions are: Generate a recipe for ${instructions}`;
  let context =
    "You are an expert at recipes. Your mission is to generate a short and easy recipe in basic HTML. Make sure to follow user instructions. Sign the recipe at the end with '<strong>SheCodes AI</strong>' in bold";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt
  }&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe")
  recipeElement.classList.remove("hidden")
    recipeElement.innerHTML = `<div class="blink">👩🏽‍🍳 Generating recipe for ${instructions}..</div>`;

  console.log("generating recipe");
  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
