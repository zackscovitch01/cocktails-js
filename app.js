import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
const URL_SINGLE_DRINK =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";

window.addEventListener("DOMContentLoaded", presentDrinks(URL));
