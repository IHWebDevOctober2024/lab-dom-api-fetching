async function fetchData() {
  const response = await fetch(
    "https://dragonball-api.com/api/characters?limit=200"
  );
  const data = await response.json();
  console.log(data);

  const characters = data.items;
  
  characters.forEach((character) => {
    const liElement = document.createElement('li');
    liElement.classList.add('card');
    liElement.innerHTML = `
    <p>  ${character.name} </p>
    <img src="${character.image}" alt="${character.name}" />
    `
    // const characterList = document.querySelector('#characterList');
    document.body.appendChild(liElement);
  });
}

fetchData();

// const imgElement = document.createElement('img');
// imgElement.setAttribute("src", character.image)
// imgElement.setAttribute("alt", "dragonball")

// const nameElement = document.createElement('p');
// nameElement.innerText = character.name
// imgElement.innerText = character.image
// liElement.appendChild(imgElement)
// liElement.appendChild(nameElement)
//const characters = fetchData(characters);

/*characters.forEach((character) => {
  const characterDiv = document.createElement("div");
  const characterName = document.createElement("h2");
  characterName.textContent = character.name;

  characterDiv.appendChild(characterName);

  // Assuming you have a container element with id "characters-container"
  document.getElementById("characters-container").appendChild(characterDiv);
});*/
