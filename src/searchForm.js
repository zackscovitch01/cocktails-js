import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const form = get(".search-form");
const input = get("[name=drink]");

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrinks(`${BASE_URL}${value}`);
});
