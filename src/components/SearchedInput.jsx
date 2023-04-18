import RecipeCardImage from "./RecipeCardImage";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SearchedInput() {
  // the uses css styles from "recipe-card.scss"
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  let search = Object.values(params);

  const getSearchedRecipes = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?number=12&apiKey=${process.env.REACT_APP_RECIPE_API}&query=${name}, `
    );
    const recipe = await api.json();
    setSearchedRecipes(recipe.results);
  };

  useEffect(() => {
    getSearchedRecipes(params.search);
  }, [params.search]);

  return (
    <div>
      <div>
        <p className="recipe-header">{search} recipes</p>
      </div>
      <div className="recipes-container">
        {searchedRecipes.length === 0 ? (
          <h2>There are no recipes for {search}</h2>
        ) : (
          searchedRecipes.map((recipe) => {
            return (
              <div className="recipe-card" key={recipe.id}>
                <RecipeCardImage imgSrc={recipe.image} pt="65%" />
                <p className="recipe-title">{recipe.title}</p>
                <Link
                  className="view-recipe-btn"
                  to={"/recipes/viewRecipe/" + recipe.id}
                >
                  VIEW RECIPE
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
