/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    
    name          : 'Ethan Bray',
    photo         : 'images/portrait.jpg',
    favoriteFoods : ['Venison', 'Lasagna','Pizza','Ice Cream'],
    hobbies       : ['Rugby', 'Video Games','Camping','Playing Guitar'],
    placesLived   : []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push ({
    place : 'Johannesburg, Gauteng',
    length : '20 years'
},
{
    place : 'Cape Town, Western Cape',
    length : '2 years'
}
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
const photoElement = document.getElementById('photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let listItem = document.createElement('li');
    listItem.textContent = food;
    document.querySelector('#favorite-foods').appendChild(listItem);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let listItem = document.createElement('li');
    listItem.textContent = hobby;
    document.querySelector('#hobbies').appendChild(listItem);
});

/* Places Lived DataList */
const placesLivedList = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});

