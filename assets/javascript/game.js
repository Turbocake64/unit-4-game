//Variables

//This is the random number to be matched by the player
var flavorLevel;
var currentFlavor;
var shrimp;
var rice;
var sausage;
var okra;
var winVal = 0;
var lossVal = 0;

//Functions

//random flavor level number
$(document).ready(function() {
    getCookin()


function getCookin() {
flavorLevel = Math.floor((Math.random() * 120) + 19)
console.log("Flavor Level: " + flavorLevel)
$("#flavor-level").text(flavorLevel);

$("#wins").text(winVal);
$("#losses").text(lossVal);

currentFlavor = 0
$("#current-flavor").text(currentFlavor);

shrimp = Math.floor(Math.random() * 12);
console.log("shrimp: " + shrimp)

rice = Math.floor(Math.random() * 12);
console.log("rice: " + rice);

sausage = Math.floor(Math.random() * 12);
console.log("sausage: " + sausage);

okra = Math.floor(Math.random() * 12);
console.log("okra: " + okra);
}

//Adds ingredients to the gumbo

//Adds shrimp
$("#shrimp").on("click", function() {
    currentFlavor = currentFlavor + shrimp;
    $("#current-flavor").text(currentFlavor);
    console.log("Current Flavor: " + currentFlavor);
    if(currentFlavor === flavorLevel) {
        winVal++
        $("#wins").text(winVal);
        $("#result-display").html("<h1>WINNER! WINNER! GUMBO DINNER!</h1>")
        getCookin();
    }
    if(currentFlavor > flavorLevel) {
        lossVal++;
        $("#losses").text(lossVal);
        $("#result-display").html("<h1>You Gumblew it!!</h1>")
        getCookin();
    }
    console.log("Wins: " + winVal);
    console.log("Losses: " + lossVal);
});


//Adds rice
$("#rice").on("click", function() {
    currentFlavor = currentFlavor + rice;
    $("#current-flavor").text(currentFlavor);
    console.log("Current Flavor: " + currentFlavor);
    if(currentFlavor === flavorLevel) {
        winVal++
        $("#wins").text(winVal);
        $("#result-display").html("<h1>WINNER!WINNER! GUMBO DINNER!</h1>")
        getCookin();
    }
    if(currentFlavor > flavorLevel) {
        lossVal++;
        $("#losses").text(lossVal);
        $("#result-display").html("<h1>You Gumblew it!!</h1>")

        getCookin();
    }
    console.log("Wins: " + winVal);
    console.log("Losses: " + lossVal);
});

//Adds sausage
$("#sausage").on("click", function() {
    // $('.ingrient').attr('id')
    currentFlavor = currentFlavor + sausage;
    $("#current-flavor").text(currentFlavor);
    console.log("Current Flavor: " + currentFlavor);
    if(currentFlavor === flavorLevel) {
        winVal++
        $("#wins").text(winVal);
        $("#result-display").html("<h1>WINNER!WINNER! GUMBO DINNER!</h1>")
        getCookin();
    }
    if(currentFlavor > flavorLevel) {
        lossVal++;
        $("#losses").text(lossVal);
        $("#result-display").html("<h1>You Gumblew it!!</h1>")
        getCookin();
    }
    console.log("Wins: " + winVal);
    console.log("Losses: " + lossVal);
});

//Adds okra
$("#okra").on("click", function() {
    currentFlavor = currentFlavor + okra;
    $("#current-flavor").text(currentFlavor);
    console.log("Current Flavor: " + currentFlavor);
    if(currentFlavor === flavorLevel) {
        winVal++
        $("#wins").text(winVal);
        $("#result-display").html("<h1>WINNER!WINNER! GUMBO DINNER!</h1>")
        getCookin();
    }
    if(currentFlavor > flavorLevel) {
        lossVal++;
        $("#result-display").html("<h1>You GumBLEW it!!</h1>")
        $("#losses").text(lossVal);
        getCookin();
    }
    console.log("Wins: " + winVal);
    console.log("Losses: " + lossVal);
});

});





