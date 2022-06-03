const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.alignItems = "center";
container.justifyContent = "center";


let gridNumber = 16;

container.style.width = `${gridNumber ** 2}px`;
container.style.height = `${gridNumber ** 2}px`;


for (let i = 0; i < gridNumber; i++) {

    const row = document.createElement("row");
    row.style.display = "flex";
    row.style.height=`${gridNumber}px`;
    row.style.borderStyle="solid";
    container.appendChild(row);

    for (let j = 0; j < gridNumber; j++) {
        const column = document.createElement("column");
        column.style.height=`${gridNumber}px`;
        column.style.borderStyle="solid";
        row.appendChild(column);
        column.style.width=`${gridNumber}px`;
    }
}