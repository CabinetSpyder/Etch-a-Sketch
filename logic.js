function clear() {
    const allCells = document.querySelectorAll(".ToBlack");
    allCells.forEach((box) =>{
        box.classList.remove("ToBlack");
    });
}

function removeGrid(){
    while (container.firstChild) {
         container.removeChild(container.lastChild);
      }
}

function styleGrid(nGrid){
    let allCells;

    if(nGrid === 16){
        allCells = document.querySelectorAll(".grid16");
    }else if(nGrid == 32){
        allCells = document.querySelectorAll(".grid32");
    }else{
        allCells = document.querySelectorAll(".grid64");
    }


    allCells.forEach((box) => {
        
        box.addEventListener("mousemove",  () => {
            box.classList.add("ToBlack");
        });

    });
}

const container = document.querySelector("#container");

const cell = document.createElement("div");
cell.classList.add("grid16");
let cellsNum = 16*16;

for(let i=0; i<cellsNum; i++){
    
    container.appendChild(cell.cloneNode(true));
}
styleGrid(16);

const btt16 = document.querySelector("#grid16");
const btt32 = document.querySelector("#grid32");
const btt64 = document.querySelector("#grid64");
const bttClear = document.querySelector("#clear");

btt16.addEventListener("click", () =>{
    cellsNum = 16*16;
    removeGrid();
    cell.classList.add("grid16");
    cell.classList.remove("grid32")
    cell.classList.remove("grid64")
    for(let i=0; i<cellsNum; i++){ 
        container.appendChild(cell.cloneNode(true));
    }
    styleGrid(16);
});

btt32.addEventListener("click", () =>{
    cellsNum = 32*32;
    removeGrid();
    cell.classList.remove("grid16");
    cell.classList.add("grid32")
    cell.classList.remove("grid64")
    for(let i=0; i<cellsNum; i++){ 
        container.appendChild(cell.cloneNode(true));
    }
    styleGrid(32);
});

btt64.addEventListener("click", () =>{
    cellsNum = 64*64;
    removeGrid();
    cell.classList.remove("grid16");
    cell.classList.remove("grid32")
    cell.classList.add("grid64")
    for(let i=0; i<cellsNum; i++){ 
        container.appendChild(cell.cloneNode(true));
    }
    styleGrid(64);
});

bttClear.addEventListener("click", () => {
    clear();
})