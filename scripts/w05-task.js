/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templeElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    const templeData = await response.json();
    templeList.length = 0; // Clear the templeList.
    templeList.push(...templeData);

    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    
    templeElement.innerHTML = "";
    
  };

/* sortBy Function */
const sortBy = (temples) => {
    reset(); 

    const filter = document.querySelector("#sortBy").value;

    switch (filter) {
        case "utah":
            // Filter for temples in Utah
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah": 
            // Filter for temples outside of Utah
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            // Filter for temples dedicated before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            // No filter, display all temples
            displayTemples(temples);
    }
};


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});