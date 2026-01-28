import { useState } from "react";
import { searchRecipes } from "./api";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeModal from "./components/RecipeModal";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    try {
      const response = await searchRecipes(query);
      setRecipes(response.data.meals || []);
    } catch {
      setError("Failed to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>🍳 Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
}

export default App;
