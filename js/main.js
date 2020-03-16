"use strict";
// Resource vars and accessors, accessors will update visible values when changed?
let food = 0;
let mineral = 0;
let fuel = 0;

let iron = 0;
let copper = 0;
let aluminum = 0;

// Get buttons and store for later
let buttonFood = document.querySelector("#foodbtn");
let buttonMineral = document.querySelector("#mineralbtn");
let buttonFuel = document.querySelector("#fuelbtn");
let buttonRefine = document.querySelector("#refinebtn");

// Load buttons into respective methods
buttonFood.onclick = gatherFood;
buttonMineral.onclick = gatherMineral;
buttonFuel.onclick = gatherFuel;
buttonRefine.onclick = refine;

// Get labels for updating later
let labelFood = document.querySelector("#foodlvl");
let labelMineral = document.querySelector("#minerallvl");
let labelFuel = document.querySelector("#fuellvl");

let labelIron = document.querySelector("#ironlvl");
let labelCopper = document.querySelector("#copperlvl");
let labelAluminum = document.querySelector("#aluminumlvl");

// Click method for basic resources
function gatherFood() {
    updateResource('food', 1);
}

function gatherMineral() {
    updateResource('mineral', 10);
}

function gatherFuel() {
    updateResource('fuel', 1);
}

function refine() {
    if (mineral > 0) {
        updateResource('mineral', -1);
        // Chooses a random metal to refine, half chance for aluminum
        switch (getRand(0, 5)) {
            case 0:
                log("Refined 1 Iron");
                updateResource("iron", 1);
                break;
            case 1:
                log("Refined 1 Iron");
                updateResource("iron", 1);
                break;
            case 2:
                log("Refined 1 Copper");
                updateResource("copper", 1);
                break;
            case 3:
                log("Refined 1 Copper");
                updateResource("copper", 1);
                break;
            case 4:
                log("Refined 1 Aluminum");
                updateResource("aluminum", 1);
                break;
        }
    }
}

// Takes a resource and an amount, will increment given resource by amount and update labels, as well as check for upgrades
function updateResource(resource, amnt) {
    switch (resource) {
        case "food":
            food += amnt;

            labelFood.innerHTML = food;
            break;

        case "mineral":
            mineral += amnt;

            labelMineral.innerHTML = mineral;
            if (mineral >= 100) {
                document.querySelector('#refinebtn').style.visibility="visible";
            }
            break;

        case "fuel":
            fuel += amnt;

            labelFuel.innerHTML = fuel;
            break;

        case "iron":
            iron += amnt;

            labelIron.innerHTML = iron;
            break;

        case "copper":
            copper += amnt;

            labelCopper.innerHTML = copper;
            break;

        case "aluminum":
            aluminum += amnt;

            labelAluminum.innerHTML = aluminum;
            break;
    }
}

function log(message) {
    document.querySelector('#console').innerHTML = message + "<br>" + document.querySelector('#console').innerHTML;
}

function getRand(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }