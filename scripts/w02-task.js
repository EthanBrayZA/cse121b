/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Ethan Bray';
let currentYear = '2023';
let profilePicture = 'images/portrait.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`); 
            


/* Step 5 - Array */
let favFoods = ['Venison', 'Lasagna','Pizza','Ice Cream'];
foodElement.innerHTML = favFoods.join('<br>');
const newFavFood = 'Chocolate';
favFoods.push(newFavFood);
foodElement.innerHTML = favFoods.join('<br>');
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
