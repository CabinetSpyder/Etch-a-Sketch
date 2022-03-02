const container = document.querySelector("#container");

const cell = document.createElement("div");
cell.classList.add("grid");
let cellsNum = 16*16;

for(let i=0; i<cellsNum; i++){
    
    container.appendChild(cell.cloneNode(true));
}

const allCells = document.querySelectorAll(".grid");

allCells.forEach((box) => {
    
    box.addEventListener("mousemove",  () => {
        box.classList.add("ToBlack");
    });

});