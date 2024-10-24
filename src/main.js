async function fetchData() {
  const response = await fetch(
    "https://dragonball-api.com/api/characters?limit=200"
  );
  const data = await response.json();
  //console.log(data);

  const characters = data.items;
  console.log(characters);
  characters.forEach(character => {
    const liElement = document.createElement('<li>');
    const imgElement = document.createElement('<img>');
    const pElement = document.createElement('<p>');
    liElement.classList.add('card');
    
  });

}

fetchData();

//const characters = fetchData(characters);

/*characters.forEach((character) => {
  const characterDiv = document.createElement("div");
  const characterName = document.createElement("h2");
  characterName.textContent = character.name;

  characterDiv.appendChild(characterName);

  // Assuming you have a container element with id "characters-container"
  document.getElementById("characters-container").appendChild(characterDiv);
});*/
