const canvas = document.querySelector(".canvas");

for (let i = 1; i<=16; i++) {
    for (let j = 1; j<=16; j++) {
        const addGrid = document.createElement("div");
        addGrid.classList.add("grid");
        //grid.textContent = `${j}`
        canvas.appendChild(addGrid);
    }
}

const grids = document.querySelectorAll(".grid");

grids.forEach(grid => {
    grid.addEventListener("mouseenter", (e) => {
        grid.style.backgroundColor = "black";
    })
})