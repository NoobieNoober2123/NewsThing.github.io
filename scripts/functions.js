//Super Cool Variables
var coins = 0;
var multi = 1;
var level = 1;
var startint = 1;
var canSave = true;
const hot = "@dm1np@n3l"
const l2A = "M1AXj0fZEy"//sword
const l3A = "o72LYqnRMt"//run
const l3B = "JWaZdV4sA6" //wak
const l4A = "27XlSIE9Wf"
const lcodes = "Your level code is "
//End of the variables :(
function supersecretsupercooldevegg(){
    const pass = "hackingiscool"
    const i = 1;
    var canFire = true;
    var firstpro = true;
    var passA = "";
    while(canFire === true){
        if(firstpro === true){
            passA = prompt("Pls enter password")
            firstpro = false
        }else if(passA === pass){
            if(canFire === true){
                alert("wow u got it rite gg nothing else has been added here yet tho lol")
                canFire = false
            }
        }else{
        passA = prompt("Try again kid. Lmao")
        }
    }
}
function coinSave() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.coins) {
        } else {
            localStorage.coins = coins
        }
    }
}
function checkCoins(){
    if(coins < 50){
    alert("Bruh have you even PLAYED the game yet? You have less than 50 coins... To be exact, you have " + coins + " coins.")
    }else if(coins > 1337){
        alert("Alright nolife, you currently have " + coins + " coins. For getting more than 1337, go to the 'HowTo' page and scroll all the way down. There is a lil button. Pass is 'hackinsiscool'. Enjoy")
    }
}
function addCoinsnorm(){
    coins = coins+1*multi;
}
function loadLevel(){
    var code = prompt("Please enter your key here");
    if(code === l2A){
        location.replace("gameStuff/sword1tke.html");
    } else if(code === l3A){
        location.replace("gameStuff/Runsw1.html");
    } else if(code == l3B){
        location.replace("gameStuff/walkw1.html");
    } else{
        alert("Code is invalid.");
    }
}
function giveCode(){
    if(level === 2){
        alert(lcodes + l2A);
    }else if(level === 3.1){
        alert(lcodes + l3A);
    }else if(level === 3.2){
        alert(lcodes + l3B);
    }
}
function redirect(){
    alert("haha u died noob");
    location.replace("MainGame.html");
}
function intro1(){
    location.replace("introStuff/start1.html");
}
function intro2(){
    document.getElementById("wow").innertHTML = "Getting Data";
    document.getElementById("wow2").innertHTML = "...";
    setTimeout(3000)
    document.getElementById("wow").innerHTML
}