async function fetchData() {

      const loadingMessage = document.createElement("p");
      loadingMessage.id = "loading-message"; // Set the ID
      loadingMessage.textContent = ("Loading...");
      document.body.appendChild(loadingMessage);

    
  try {
      // Fetch data from the API
      const response = await fetch("https://dragonball-api.com/api/characters?limit=200");
  
      // Check if the response is successful using the 'ok' property
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

    const data = await response.json();
    
    document.body.removeChild(loadingMessage);

    
    
    const ulElement = document.querySelector("ul#characters-list")
    console.log(data.items[0].name);
    data.items.forEach(character => {
          
          const characters = document.createElement("li");
          characters.innerHTML = `
          <li class = "card">
          <img src="${character.image}" alt="${character.name}"/>
          <p>${character.name}</p>
          </li>
          
          `
          ulElement.appendChild(characters);
      });
}

      catch (error) {
            // Remove the loading message in case of an error
            document.body.removeChild(loadingMessage);
            
            // Display an error message on the page
            const errorMessage = document.createElement("p");
            errorMessage.id = "error-message"; // Set the ID
            errorMessage.textContent = "Error: Failed to load data.";
            document.body.appendChild(errorMessage);
            
            console.error("Fetch error:", error); // Log the error for debugging
      }
      return data;
}

fetchData();

// for each character, create an HTML list item element
// each list item should contain, characters image as an img element and name











