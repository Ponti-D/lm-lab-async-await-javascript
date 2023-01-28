import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

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
