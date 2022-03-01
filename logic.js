const container = document.querySelector("#container");

const cell = document.createElement("div");
cell.classList.add("grid");
let cellsNum = 16*16;

for(let i=0; i<cellsNum; i++){
    console.log(`Hola + ${i}`);
    container.appendChild(cell.cloneNode(true));
}
