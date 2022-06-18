
// Container
const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.alignItems = "center";
container.justifyContent = "center";
container.style.width = "400px";
container.style.height="400px";

// Function for random rgb color, experimental

function randomRGB() {
    let RGB = Math.floor(Math.random()*255);
    return RGB;
}

// Function for random hex color

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letters [Math.floor(Math.random()*16)];
    }
    return color;
}

// Prompt for determining number of rows and columns

let gridNumber;
const btn = document.querySelector("#btn");
btn.style.margin = "20px";

btn.addEventListener('click', () => {
 let gridNumber = prompt("How many rows?");
 if (gridNumber > 100 || gridNumber < 0) {
    alert("Please add a valid number")
 } else {
    console.log(randomRGB());
    container.style.borderStyle="solid";
    container.style.borderWidth="1px";
    container.innerHTML="";
        // Loop for creating rows
 for (let i = 0; i < gridNumber; i++) {

    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.height=`${400 / gridNumber}px`;
    row.style.borderStyle="solid";
    row.style.borderWidth="0px";

    container.appendChild(row);
    

    // Loop for creating columns
    for (let j = 0; j < gridNumber; j++) { 
        const column = document.createElement("div");
        column.classList.add("square");
        column.style.borderStyle="solid";
        column.style.borderColor="black";
        column.style.borderWidth="1px";
        row.appendChild(column);
        column.style.width=`${400 / gridNumber}px`;
    }
}
}
    const column2 = document.querySelectorAll(".square")
    const column3 = Array.from(column2);

    //Event listening for sketching
    column3.forEach((element) => {
        element.addEventListener('mouseenter', ()=> {
            element.style.backgroundColor=`${getRandomColor()}`;
        })
    })
    })



  
