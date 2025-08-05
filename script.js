const canvas = document.querySelector(".canvas");

let gridSize = 16;
let paintColor = "black";

const gridInput = document.querySelector("#gridInput");
const create = document.querySelector(".create");


create.addEventListener("click", (e) => {
    const gridInputVal = Number(gridInput.value);
    if (!isNaN(gridInputVal) && gridInputVal > 0 && gridInputVal <=100) {
        gridSize = gridInputVal;
        clearGrid();
        createGrid();
    } 
})


function createGrid() {
    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            const addGrid = document.createElement("div");
            let size = (512 / gridSize);
            addGrid.style.height = `${size}px`;
            addGrid.style.width = `${size}px`;
            addGrid.classList.add("grid");
            canvas.appendChild(addGrid);

            addGrid.addEventListener("mouseenter", () => {
                if (rainbowColor == true) {
                    paintColor = rainbowArray[Math.floor(Math.random() * rainbowArray.length)];
                }
                addGrid.style.backgroundColor = paintColor;
            })
        }
    }
}

createGrid();

const grids = document.querySelectorAll(".grid");

function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

const black = document.querySelector(".black");
black.addEventListener("click", (e) => {
    paintColor = "black";
    rainbowColor = false;
})

const red = document.querySelector(".red");
red.addEventListener("click", (e) => {
    paintColor = "red";
    rainbowColor = false;
})

const blue = document.querySelector(".blue");
blue.addEventListener("click", (e) => {
    paintColor = "blue";
    rainbowColor = false;
})

const yellow = document.querySelector(".yellow");
yellow.addEventListener("click", (e) => {
    paintColor = "yellow";
    rainbowColor = false;
})

const green = document.querySelector(".green");
green.addEventListener("click", (e) => {
    paintColor = "green";
    rainbowColor = false;
})

const purple = document.querySelector(".purple");
purple.addEventListener("click", (e) => {
    paintColor = "purple";
    rainbowColor = false;
})

const orange = document.querySelector(".orange");
orange.addEventListener("click", (e) => {
    paintColor = "orange";
    rainbowColor = false;
})

const pink = document.querySelector(".pink");
pink.addEventListener("click", (e) => {
    paintColor = "pink";
    rainbowColor = false;
})

const gray = document.querySelector(".gray");
gray.addEventListener("click", (e) => {
    paintColor = "gray";
    rainbowColor = false;
})

const rainbowArray = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"];

let rainbowColor = false;

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", (e) => {
    rainbowColor = true;
})