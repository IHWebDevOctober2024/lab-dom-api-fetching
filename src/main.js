async function fetchData() {
  try {
    const response = await fetch(
      "https://dragonball-api.com/api/characters?limit=200"
    );
    const data = await response.json();

    const characters = data.items;

    characters.forEach((character) => {
      const liElement = document.createElement("li");
      liElement.classList.add("card");
      liElement.innerHTML = `
      <img src="${character.image}" alt="${character.name}" />
      <p>  ${character.name} </p>
            `;
      // const characterList = document.querySelector('#characterList');
      document.body.appendChild(liElement);
    });
  } catch (error) {
    const loadingMessage = document.createElement("p");
    loadingMessage.textContent = "Loading...";
    document.body.appendChild(loadingMessage);
    console.error("Failed to fetch characters:", error);
  }
}

fetchData();
