var money = getCookie('money');
var water = getCookie('water');


//The large div that contains the two sections
var mainDiv = document.getElementById('mainDiv');
//Each section; prompting, and water
var promptSection = document.getElementById('promptSection');
var waterSection = document.getElementById('waterSection');


document.addEventListener('DOMContentLoaded', (Event) => {
    console.log("Everything Loaded :D");

    if (getCookie('money') === null) {
        setCookie('money', 0, 365);
    }
    if (getCookie('water') === null) {
        setCookie('water', 5000, 365);
    }
    console.log('Money: ' + getCookie('money'));
    console.log('Water: ' + getCookie('water'));

    //Checks if the user does not have a saved value for their cookies, sets
    updateScreen();
});

//Clicking prompt button
document.getElementById("promptButton").addEventListener('click', (MouseEvent) => {
    changeMoney(1);
    changeWater(-1);
    updateScreen();
});
//Clicking water button
document.getElementById('waterButton').addEventListener('click', (MouseEvent) => {
    changeWater(1);
    updateScreen
});

//AI upgrades:
document.getElementById("advertise").addEventListener('click', (MouseEvent) => {
    tryUpgrade('advertiseUpgrade', 50);
});


function tryUpgrade(upgradeName, cost) {    
    //All possible upgrades
    let upgrades = [
        'advertise', //AI upgrades
        'improveCooling', 
        'buyServer',
        'buyRam',
        'turnOffHose', //Water upgrades
        'recycle',
        'donateToCharity',
        'teachOthers'
    ]
    if (getCookie('money') >= cost && indexOf(upgradeName, upgrades) != -1) {
        let numOfUpgrades = getCookie(upgradeName) ?? 0; //sets numOfUpgrades to the cookie's value, if null or undefined, it will return 0
        
        setCookie(upgradeName, numOfUpgrades + 1, 365);
    }
}


//Used to change money with ease, makes sure it won't go below zero, logs if there is an attempt to.
//Also updates the cookie if there is no value or a faliure
//{amount} -- Integer, added to money, negative removes money, postive adds.
function changeMoney(amount) {
    if (typeof getCookie('money') != 'number') {
        console.log("money cookie undefined? \n " + typeof getCookie('money') != 'number');
        setCookie('money', 1, 365);
        money = getCookie('money');
    }

    if (money + amount > 0) {
        money = money + amount;
        setCookie('money', money, 365);
    } else {
        console.log("There was an attempt to bring money below 0:\nCurrent money: " + money + "\nAmount being removed: " + amount);
        return;
    }
    console.clear();
    console.log("Current money: " + money)
}
//Used to change water with ease, makes sure it won't go below zero, logs if there is an attempt to.
//Also updates the cookie if there is no value or a faliure
//{amount} -- Integer, added to water, negative removes water, postive adds.
function changeWater(amount) {
    if (typeof getCookie('water') != 'number') {
        console.log("water cookie undefined? \n " + typeof getCookie('money') != 'number');
        setCookie('water', 1, 365);
        water = getCookie('water');
    }

    if (water + amount > 0) {
        water = water + amount;
        setCookie('water', water, 365);
    } else {
        console.log("There was an attempt to bring water below 0:\nCurrent water: " + water + "\nAmount being removed: " + amount);
        return;
    }
    console.clear();
    console.log("Current water: " + water)
    updateScreen();
}

//Simple update screen function
function updateScreen() {
    let moneyDisplay = document.getElementById('moneyDisplay');
    let waterDisplayBar = document.getElementById('waterDisplayBar');

    moneyDisplay.firstElementChild.textContent = ("Money: $" + money);
    waterDisplayBar.style.width = ((water/100) + '%')
}






//CODE WRITTEN BY "BRO CODE" ON YOUTUBE - partially edited by me: (https://youtu.be/i7oL_K_FmM8?si=qT1KSFUdgSxtRmrH)
//Code is in comments of video and in the video itself 
function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax; Secure`;
}


//Gets the value of a cookie through these setps:
// 1.  Gets the whole cookie string (list of name/value pairs separated by semicolons)
// 2.  Splits the string by each semicolon, giving each separated name/value pair in an array (cArray)
// 3.  It then iterates through the array until it finds the name that was input
// 3.5 If none is found, it returns null
// 4.  If the result can be parsed as an int, the int value is returned, otherwise it's returned as a string    
function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    for (const element of cArray) {
        if (element.indexOf(name + "=") === 0) {
            result = element.substring(name.length + 1);
            break;
        }
    }

    //If there is no cookie, return null
    if (result === null) return null;

    if (result !== "" && !isNaN(result)) {
        return parseInt(result, 10);
    } 
    
    return result;
}