import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, onSelect }) {
  if (!recipes.length) return <p>No recipes found.</p>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} onClick={onSelect} />
      ))}
    </div>
  );
}

export default RecipeList;
