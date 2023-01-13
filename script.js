document.addEventListener('DOMContentLoaded', function() {

const display = document.getElementById('display');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const clear = document.getElementById('clear');


let numberDisplaying = 0;


function incrementFunc() {
    numberDisplaying += 1;
    display.innerHTML = numberDisplaying;
}

function decrementFunc() {
    numberDisplaying -=1;
    display.innerHTML = numberDisplaying;
}

function clearFunc() {
    numberDisplaying = 0;
    display.innerHTML = numberDisplaying;
}

increment.addEventListener('click', incrementFunc);
decrement.addEventListener('click', decrementFunc);
clear.addEventListener('click', clearFunc);

//Callback Function example

const callbacksDisp = document.getElementById('callbacks');
const callbackBtn = document.getElementById('callback-btn');

function sayHello() {
    callbacksDisp.innerHTML = 'Hello World!';
}

function buttonClicked() {
    sayHello();
}

callbackBtn.addEventListener('click', buttonClicked);

// Arrow Function example

const arrowDisp = document.getElementById('arrowDisp');
const arrowBtn = document.getElementById('arrowDoubleBtn');

const numbers = [1, 2, 3, 4, 5];
let doubled = []

function doubleArray() {
    // this is arrow function
    doubled = numbers.map(number => number * 2);
    arrowDisp.textContent = doubled.join('');
}

arrowBtn.addEventListener('click', doubleArray);

// Class in JS example

/* JS uses Class to create an object. It's a template for create object. 
*/
const displayClass = document.getElementById('classDisp'); 
const dogBtn = document.getElementById('dogBtn');
const catBtn = document.getElementById('catBtn');

class Animal{
    constructor(name) {
        this.name = name
    }

    says() { 
        if(this.name === 'Dog' ){
            displayClass.textContent = 'Dog Barks!';
            console.log(`${this.name} barks`);
        } else if (this.name === 'Cat') {
            displayClass.textContent = 'Cat Meows!';
            console.log(`${this.name} meows`);
        }
    }
}

const dog = new Animal('Dog');
const cat = new Animal('Cat');


dogBtn.addEventListener('click', () => dog.says());
catBtn.addEventListener('click', () => cat.says());

//Promises and Async, Await.
const form = document.getElementById('asyncForm');
const searchInput = document.getElementById('searchData');
const searchBtn = document.getElementById('searchBtn');
const apiDisplayer = document.getElementById('apiDisplay');


// when button clicked get the iput value
searchBtn.addEventListener('click', getInputValue);


function getInputValue() {
    let inputValue = searchInput.value;
    getApi(inputValue);
}
// get it from api 

async function getApi(inputValue) {
    const apiKey = YOUR_API_KEY;
    const apiUrl = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe/?query=${inputValue}&rapidapi-key=${apiKey}`;
    try 
    {
        let response = await fetch(apiUrl);
        let data = await response.json();
        if(data) {
            show(data);
        }else {
            apiDisplayer.innerHTML = 'No Recipes Found';
            console.log(data);
        }
    } catch (error) {
        console.log(error);
        apiDisplayer.innerHTML = 'Error Occured';
    }

}


function show(data) {
    apiDisplayer.innerHTML = '';
    for(recipe of data) {
        let titles = document.createElement('p');
        titles.innerHTML = `<span>${recipe.title}</span> <br/> ${recipe.ingredients} <br/><hr> ${recipe.instructions} <br/> <b>${recipe.servings}</b>`;
        apiDisplayer.appendChild(titles);
    }   
}
});