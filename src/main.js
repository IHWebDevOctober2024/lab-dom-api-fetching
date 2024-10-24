async function fetchData() {
    const response = await fetch("https://dragonball-api.com/api/characters?limit=200.");
    const data = await response.json();
    
    
    const ulElement = document.querySelector("ul#characters-list")
    console.log(data.items[0].name);
    data.items.forEach(character => {
    
    const characters = document.createElement("li");
    characters.innerHTML = `
    <li class = "card">
         <img src="${character.image}" alt="${character.name}"/>
          <p>${character.name};</p>
    </li>
          
          `
          ulElement.appendChild(characters);
    });

    return data;
}

fetchData();

// for each character, create an HTML list item element
// each list item should contain, characters image as an img element and name











