const baseUrl = "http://flip1.engr.oregonstate.edu:4718/";

//Makes GET request to server for al rows in database
const getData = () => {
    let req = new XMLHttpRequest();
    req.open("GET", baseUrl, true);
    req.addEventListener('load', (event) => {
        if (req.status >= 200 && req.status < 400) {
            let response = JSON.parse(req.responseText);
            deleteTable();
            makeTable(response);
        } else {
            console.log("Error in network request: " + req.statusText);
        }
        event.preventDefault();
    });
    req.send(null);
};

document.addEventListener('DOMContentLoaded', getData); 
//Add an exercise to hte database by generating a POST request
const insert = () => {
    document.getElementById("btnsubmit").addEventListener("click", (event) => {
        payload = {}
        payload.id = document.getElementById('id').value;
        payload.name = document.getElementById('name').value;
        payload.reps = document.getElementById('reps').value;
        payload.weight = document.getElementById('weight').value
        payload.date = document.getElementById('date').value
        const selector = document.querySelector('input[name="unit"]:checked')
        if (selector.value === "lbs") {
            payload.lbs = true;
        }
        if (selector.value === "kgs") {
            payload.lbs = false;
        }
        console.log(payload)
        const req = new XMLHttpRequest();
        req.open('POST',baseUrl, true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load',function(){
          if(req.status >= 200 && req.status < 400){
            console.log("success")
            getData()
          } else {
            console.log("Error in network request: " + req.statusText);
        }});
        req.send(JSON.stringify(payload));
        console.log("chilling")
        event.preventDefault();
    });

}
        
document.addEventListener('DOMContentLoaded', insert);

    // generates put and delete request depending on button clicked

const deleteRow = () => { 
    document.getElementById("delete").addEventListener("click", (event) => {
        const children = event.target.parentElement.children
        for (let child of children) {
            if (child.id == "id") {
                const removeID = child.textContent
                payload = { remove: removeID}
                console.log(payload)
                const req = new XMLHttpRequest();
                req.open('DELETE',baseUrl, true);
                req.setRequestHeader('Content-Type', 'application/json');
                req.addEventListener('load',function(){
                    if(req.status >= 200 && req.status < 400){
                    console.log("success")
                    getData()
                    } else {
                    console.log("Error in network request: " + req.statusText);
                }});
                req.send(JSON.stringify(payload));
                console.log("chilling")
                event.preventDefault();
                    }
                }
            });

    };

    const editRow = () => { 
        document.getElementById("edit").addEventListener("click", (event) => {
            const children = event.target.parentElement.children
            for (let child of children) {
                child.parentElement.removeChild
                
                    console.log(payload)
                    const req = new XMLHttpRequest();
                    req.open('UPDATE',baseUrl, true);
                    req.setRequestHeader('Content-Type', 'application/json');
                    req.addEventListener('load',function(){
                        if(req.status >= 200 && req.status < 400){
                        console.log("success")
                        getData()
                        } else {
                        console.log("Error in network request: " + req.statusText);
                    }});
                    req.send(JSON.stringify(payload));
                    console.log("chilling")
                    event.preventDefault();
                        }
                    }
                });
    
        };


document.addEventListener('DOMContentLoaded', deleteRow);

const makeButton = (name, txt, id) => {
     let btn = document.createElement("button");
     btn.appendChild(document.createTextNode(txt));
     btn.setAttribute("name", name);
     btn.setAttribute("id", id);
     return btn;
};

const makeInput = (type, id, value) => {
    let input = document.createElement("input");
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    input.setAttribute('value', value);
    return input;
};

const makeRadioInputs = (name, value) => {
    let radio = document.createElement("input")
    radio.setAttribute('type', 'radio')
    radio.setAttribute('name', name);
    radio.setAttribute('value', value);
    return radio
};

const makeCell = (contents) => {
    let td = document.createElement("td");
    td.appendChild(document.createTextNode(contents));
    return td;
};

const makeRow = (rowData) => {
    let keys = Object.keys(rowData)
    let data = Object.values(rowData);
    let tr = document.createElement("tr");
    for (i = 1; i < data.length; i++) {
        if (keys[i] === "lbs") {
            if (data[i] === 1) {
                tr.appendChild(makeCell("Lbs"));
            }
            else tr.appendChild(makeCell("Kgs"));
        }
        else tr.appendChild(makeCell(data[i]));
    };
    tr.appendChild(makeButton("edit", "Edit", "edit"));
    tr.appendChild(makeButton("delete", "Delete", "delete"));
    return tr;
};
// rows are an array
const makeTable = (rows) => {
    let tbody = document.getElementById("tbody");
    rows.forEach(element => {
        tbody.appendChild(makeRow(element));
    });
};

const disableInputs = () => {

};
//row is an element
const enableRow = (row) => {

};

const toggleUpdateButton = (row) => {


};

const deleteTable = () => {
    let table = document.getElementById("tbody");
    while (table.firstChild) {
        table.removeChild(table.firstChild)
    }
};