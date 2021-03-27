function createTable (num) {
    //Creates the header section of the table
    let table = document.createElement("table");
    let headRow = document.createElement("tr");
    for (i = 1; i < num; i++){
        let headCell = document.createElement("th");
        headCell.appendChild(document.createTextNode("Header "+ i));
        headRow.appendChild(headCell);
    };
    table.appendChild(headRow);
    //Creates the data cells of table using nexted loop
    for (j = 1; j < num; j++){
        let row = document.createElement("tr");
        for (i = 1; i < num; i++){
            let cell = document.createElement("td");
            cell.appendChild(document.createTextNode(j+", "+i));
            row.appendChild(cell);
            //sets sytle of data cells
            cell.style.border = "dashed";
            cell.style.borderWidth = "1px";
        };
        table.appendChild(row);
        
    };
    return table;
};

function createButton (buttons) {
    //Creates div for buttons and creates buttons using given array
    let buttonDiv = document.createElement("div");
    buttons.forEach(element => {
        let button = document.createElement("button");
        button.textContent = element;
        //adds event listeners based on name of button
        if (element != "Mark Cell") {
            button.addEventListener("click", moveCell)
        }
        else {
            button.addEventListener("click", markCell)
        }
        buttonDiv.appendChild(button);
    });
    return buttonDiv;
};
//Adds table and buttons to document using DOM 
document.body.appendChild(createTable(301));
document.body.appendChild(document.createElement("br"));
document.body.appendChild(createButton(["left", "up", "down", "right", "Mark Cell"]));

//Creates an object to hold the selected cell value
let selectedCell = {cell: 0};
//Sets selected cell to upper left corner 
selectCell(0,0);

function moveCell(event, num=300) {
    //sets array-like object to variable cells holding all td tags
    let cells = document.body.getElementsByTagName("td");
    let prev = selectedCell.cell;
    let index = selectedCell.cell;
    //checks  button clicked text content, then applies rules 
    if (event.target.textContent === "up"){
        if (prev - num >= 0) {
            index = prev - num;
        }
    }
    if (event.target.textContent === "down") {
        if (prev + num <= cells.length - 1) {
            index = prev + num;
        }
    }
    if (event.target.textContent === "left") {
        if (prev % num != 0) {
            index = prev - 1;
        }
    }
    if (event.target.textContent === "right") {
        if ((prev + 1) % num != 0) {
                index = prev + 1;
            }
    }
    selectCell(prev, index);
}

function selectCell (prev, index) {
    // sets styles of selected cells and cell that was moved from
    let cells = document.body.getElementsByTagName("td");
    cells[prev].style.border = "dashed";
    cells[prev].style.borderWidth = "1px";
    cells[index].style.border = "solid";
    cells[index].style.borderColor = "red";
    // sets new selected cell location
    selectedCell.cell = index;
}

function markCell () {
    // marks cell at current selected cell location
    let cells = document.body.getElementsByTagName("td");
    cells[selectedCell.cell].style.backgroundColor = "yellow";
}

