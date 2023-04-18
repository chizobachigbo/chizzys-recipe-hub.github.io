import RecipeCardImage from "./RecipeCardImage";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeCard() {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const getPopularRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API}&number=9`
    );
    const data = await api.json();
    setPopularRecipes(data.recipes);
  };

  useEffect(() => {
    getPopularRecipes();
  }, []);
  
  return (
    <div>
       <div>
        <p className="recipe-header">Popular Recipes</p>
      </div>
      <div className="recipes-container">
        {popularRecipes.map((recipe) => {
          return (
            <div className="recipe-card" key={recipe.id}>
              <RecipeCardImage imgSrc={recipe.image} pt="65%" />
                <p className="recipe-title">{recipe.title}</p>
                <Link className="view-recipe-btn" to={"/recipes/viewRecipe/" + recipe.id}>VIEW RECIPE</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
