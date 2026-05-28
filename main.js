var money = 0;
//The large div that contains the two sections
var mainDiv = document.getElementById('mainDiv');
//Each section; prompting, and water
var promptSection = document.getElementById('promptSection');
var waterSection = document.getElementById('waterSection');


document.addEventListener('DOMContentLoaded', (Event) => {
    console.log("Everything Loaded :D");
    displaySections();
});

//Clicking prompt button
document.getElementById("promptButton").addEventListener('click', (MouseEvent) => {
    changeMoney(1);
    updateScreen();
});

//Runs whenever window is resized
window.addEventListener('resize', (event) => {
    //console.log's shouldn't be used, just helpful to track them 
    //console.log('Window height:', window.innerHeight);
    //console.log('Window width:', window.innerWidth);

    displaySections();
});

//Sets the float and display values of the sections to fit expected
function displaySections() {
    if (window.innerWidth <= 900) {
        waterSection.style.float = "left";
        waterSection.style.alignSelf = "flex-end";
    } else {
        waterSection.style.float = "right";
        waterSection.style.alignSelf = "flex-start";
    }
}

//Used to change money with ease, makes sure it won't go below zero, logs if there is an attempt to.
//{amount} -- Integer, added to money, negative removes money, postive adds.
function changeMoney(amount) {
    if (money + amount > 0) {
        money = money + amount;
    } else {
        console.log("There was an attempt to bring money below 0:\nCurrent money: " + money + "\nAmount being removed: " + amount);
        return;
    }
    console.clear();
    console.log("Current money: " + money)
}

function updateScreen() {
    var moneyDisplay = document.getElementById('moneyDisplay');

    moneyDisplay.textContent = ("Money: $" + money);
}

setCookie('Im','testing1', 400);
setCookie('Testing','testing2', 400);
setCookie('Too','testing3', 400);

//PASTED IN FOR TESTING: 
function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}