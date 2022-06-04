
// Container
const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.alignItems = "center";
container.justifyContent = "center";
// Prompt for determining number of rows and columns

let gridNumber;
const btn = document.querySelector("#btn");
btn.style.margin = "20px";

btn.addEventListener('click', () => {
 let gridNumber = prompt("How many rows?");
 container.innerHTML="";
        // Loop for creating rows
 for (let i = 0; i < gridNumber; i++) {

    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.height=`20px`;
    row.style.borderStyle="solid";
    row.style.border="1px";
  
    container.appendChild(row);
    

    // Loop for creating columns
    for (let j = 0; j < gridNumber; j++) { 
        const column = document.createElement("div");
        column.classList.add("square");
        column.style.borderStyle="solid";
        column.style.borderColor="red";
        row.appendChild(column);
        column.style.width=`14px`;
    }
}
    const column2 = document.querySelectorAll(".square")
    const column3 = Array.from(column2);

    //Event listening for sketching
    column3.forEach((element) => {
        element.addEventListener('mouseenter', ()=> {
            element.style.backgroundColor="black";
        })
    })
    })



  
