import axios from "axios";

const API = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

export const searchRecipes = (query) => API.get(`/search.php?s=${query}`);
