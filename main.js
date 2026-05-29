var money = getCookie('money');
//The large div that contains the two sections
var mainDiv = document.getElementById('mainDiv');
//Each section; prompting, and water
var promptSection = document.getElementById('promptSection');
var waterSection = document.getElementById('waterSection');


document.addEventListener('DOMContentLoaded', (Event) => {
    console.log("Everything Loaded :D");

    //Checks if the user does not have a saved value for their cookies, sets
    if (typeof getCookie('money') != 'number') {
        setCookie('money', 0, 300);
        money= getCookie('cookie');
    }
    updateScreen();
});

//Clicking prompt button
document.getElementById("promptButton").addEventListener('click', (MouseEvent) => {
    changeMoney(1);
    updateScreen();
});



// //Runs whenever window is resized
// window.addEventListener('resize', (event) => {
//     //console.log's shouldn't be used, just helpful to track them 
//     //console.log('Window height:', window.innerHeight);
//     //console.log('Window width:', window.innerWidth);

//     displaySections();
// });



//Used to change money with ease, makes sure it won't go below zero, logs if there is an attempt to.
//{amount} -- Integer, added to money, negative removes money, postive adds.
function changeMoney(amount) {
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

//Simple update screen function
function updateScreen() {
    var moneyDisplay = document.getElementById('moneyDisplay');

    moneyDisplay.textContent = ("Money: $" + money);
}






//CODE WRITTEN BY "BRO CODE" ON YOUTUBE: (https://youtu.be/i7oL_K_FmM8?si=qT1KSFUdgSxtRmrH)
//Code is in comments of video and in the video itself 
function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}


//Gets the value of a cookie
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
