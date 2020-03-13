// Resource vars and accessors, accessors will update visible values when changed?
let food = 0;
let mineral = 0;
let fuel = 0;

// Load buttons into respective methods
document.querySelector("#foodbtn").onclick = gatherFood;
document.querySelector("#mineralbtn").onclick = gatherMineral;
document.querySelector("#fuelbtn").onclick = gatherFuel;

// Get labels for updating later
let labelFood = document.querySelector("#foodlvl")
let labelMineral = document.querySelector("#minerallvl")
let labelFuel = document.querySelector("#fuellvl")

// Click method for basic resources
function gatherFood() {
    food += 1;

    labelFood.innerHTML = food;
    console.log("food = " + food);
}

function gatherMineral() {
    mineral += 1;

    labelMineral.innerHTML = mineral;
    console.log("mineral = " + mineral);
}

function gatherFuel() {
    fuel += 1;

    labelFuel.innerHTML = fuel;
    console.log("fuel = " + fuel);
}