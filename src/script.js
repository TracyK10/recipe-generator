function generateRecipe(event){
    event.preventDefault()

    new Typewriter("#recipe", {
      strings: 'Here is the recipe for cake',
      autoStart: true,
      delay: 40,
      cursor: "|"
    });
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener('submit', generateRecipe)