import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New recipe was submitted with:", formData);
    setRecipes([...recipes, formData]);
    setFormData({ ...initialFormState });
  };
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>

      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
}

export default App;
