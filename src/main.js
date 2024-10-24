console.clear()

// ITERATION 1, 2, 3 :

// async function fetching() {
//     const ulItem = document.querySelector("#characters-list")
//     const loadingMessage = document.createElement("h1")
//         loadingMessage.innerText = "Loading..."
//         document.body.appendChild(loadingMessage)

//     try {
//     const response = await fetch("https://dragonball-api.com/api/characters?limit=200");
//     const jsonResponse = await response.json();
    
//     jsonResponse.items.forEach((character) => {
//         const listItem = document.createElement("li");
//         listItem.classList= ("card")
//         listItem.innerHTML = `
//             <img src=${character.image} alt="">
//             <p>${character.name}</p>
//         `
//         ulItem.appendChild(listItem)
//         loadingMessage.innerText = ""; 
//         return jsonResponse
//     });

//     } catch (error){

//         console.error("Failed to complete loading")
        
//     }
    
// }

// fetching()


async function fetching() {
    const ulItem = document.querySelector("#characters-list")

    const loadingMessage = document.createElement("h1")
    loadingMessage.classList= ("title")
    loadingMessage.innerText = "Loading..."
    document.body.prepend(loadingMessage)

    const response = await fetch("https://dragonball-api.com/api/characters?limit=200");
    const jsonResponse = await response.json();
    
    if (response.ok){
        loadingMessage.innerText = "CHARACTERS"
        jsonResponse.items.forEach((character) => {
            const listItem = document.createElement("li");
            listItem.classList= ("card")
            listItem.innerHTML = `
                <img src=${character.image} alt="">
                <p>${character.name}</p>
            `
            ulItem.appendChild(listItem)
        
            return jsonResponse
        });
        
    } else {
        loadingMessage.classList.add("centered")
        loadingMessage.innerText = "Failed to load data.";
        console.error("Failed to complete request")
    }
        
}

fetching()

   
