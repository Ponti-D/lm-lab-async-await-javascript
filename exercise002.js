import fetch from "node-fetch";

const jsonTypicode = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

async function fetchData(apiEndPoint) {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData(jsonTypicode);
