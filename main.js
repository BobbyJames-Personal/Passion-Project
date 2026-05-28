var money = 0;

document.addEventListener('DOMContentLoaded', (Event) => {
    console.log("Everything Loaded :D");
});

document.getElementById("promptButton").addEventListener('click', (MouseEvent) => {
    changeMoney(1);
});




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


