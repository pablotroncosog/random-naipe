
window.onload = () => {
document.querySelector ('.contenedormain').classList.add(generateRandomsuit());
document.querySelector ('.number').innerHTML = (generateRandomNumber())
}


let generateRandomNumber = () => {
let numbers = ["A", "2", "3", "4", "5", "6","7", "8", "9","10", "J", "Q", "K"];
let indexNumber = Math.floor(Math.random()*numbers.length);
    return  numbers [indexNumber];
}


let generateRandomsuit = () => {
let suit = ["diams", "spades", "clubs", "hearts"];
let indexSuit = Math.floor(Math.random()* suit.length);
return suit[indexSuit];
}