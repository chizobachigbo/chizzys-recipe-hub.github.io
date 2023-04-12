import CustomImage from "../components/CustomImage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const [activeBtn, setActiveBtn] = useState("instructions");

  const [details, setDetails] = useState({});
  let params = useParams();

  const getRecipe = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_RECIPE_API}`
    );
    const recipe = await api.json();
    // console.log(recipe);
    setDetails(recipe);
  };

  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.name]);

  return (
    <div>
      <div className="recipe-board">
        <div className="recipe-detail">
          <h2 className="view-recipe-title">{details.title}</h2>
          <CustomImage imgSrc={details.image} pt="80%" />
        </div>
        <div className="recipe-info">
          <div className="instruction-ingredient-btn">
            <button
              className={
                activeBtn === "instructions" ? "active-btn" : "recipe-btn"
              }
              onClick={() => setActiveBtn("instructions")}
            >
              Instructions
            </button>
            <button
              className={
                activeBtn === "ingredients" ? "active-btn" : "recipe-btn"
              }
              onClick={() => setActiveBtn("ingredients")}
            >
              Ingredients
            </button>
          </div>
          {activeBtn === "instructions" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
          )}
          {activeBtn === "ingredients" && (
            <ul>
              {details.extendedIngredients.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.original}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

