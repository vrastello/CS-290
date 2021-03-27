// Takes JSON file and creates table
// could potentially update JSON file using other code, makes it more modular

var tList = {
    "Tarantulas": [
    {
        "Species": "avicularia versicolor",
        "Comment": "Multi-colored Island Species, Docile",
        "Price": "$49.99",
        "Wikipedia": "https://en.wikipedia.org/wiki/Antilles_pinktoe_tarantula",
        "Type": "Arboreal",
        "T-Color": "#960606"
    },
    {
        "Species": "brachypelma boehmei",
        "Comment": "Red Mexican Burrower, Docile",
        "Price": "$59.99",
        "Wikipedia": "https://en.wikipedia.org/wiki/Brachypelma_boehmei",
        "type": "Burrower",
        "T-Color": "red"
    },
    {
        "Species": "chromatopelma cyaneopubescens",
        "Comment": "Bright Colors, Heavy Webbing, Skittish",
        "Price": "$29.99",
        "Wikipedia": "https://en.wikipedia.org/wiki/Greenbottle_blue_tarantula",
        "type": "Desert, low-arboreal",
        "T-Color": "#053dad"
    },
    {
        "Species": "harpactira pulchripes",
        "Comment": "Rare, Burrower, Aggressive",
        "Price": "$114.99",
        "Wikipedia": "https://en.wikipedia.org/wiki/Harpactira_pulchripes",
        "type": "African Burrower",
        "T-Color": "#f2c913"
    },
    {
        "Species": "pamphobeteus nigricolor",
        "Comment": "Giant, Colorful Male, Rare, Aggressive",
        "Price": "$69.99",
        "Wikipedia": "https://en.wikipedia.org/wiki/Pamphobeteus_nigricolor",
        "type": "Bird-Eater",
        "T-Color": "magenta"
    },
    {
        "Species": "poecilotheria metallica",
        "Comment": "Hobby favorite, Colorful, Strong Venom",
        "Price": "$99.99",
        "Wikipedia": "https://en.wikipedia.org/wiki/Poecilotheria_metallica",
        "type": "Arboreal",
        "T-Color": "blue"
    },
    {
        "Species": "poecilotheria rufilata",
        "Comment": "Giant, Very Fast, Strong Venom",
        "Price": "$35.99",
        "Wikipedia": "https://en.wikipedia.org/wiki/Poecilotheria_rufilata",
        "type": "Arboreal",
        "T-Color": "#177527"
    },
    {
        "Species": "pterinochilus murinus",
        "Comment": "Very Fast, Very Aggressive, nick-name: OBT--'Orange Bitey Thing'",
        "Price": "$35.99",
        "Wikipedia": "https://en.wikipedia.org/wiki/Poecilotheria_rufilata",
        "type": "African Burrower",
        "T-Color": "orange"
    },
]}

function createTable () {
    //Creates the header section of the table
    let table = document.createElement("table");
    let headRow = document.createElement("tr");
    var tarantulas = tList.Tarantulas;
    for (var prop in tarantulas[0]) {
        let headCell = document.createElement("th");
        headCell.appendChild(document.createTextNode(prop));
        headRow.appendChild(headCell);
        headCell.style.border = "solid";
        headCell.style.borderWidth = "1px";
    };
    table.appendChild(headRow);
    table.style.marginLeft = "auto"
    table.style.marginRight = "auto"
    table.style.textAlign = "center"
    //Creates the data cells of table using nexted loop
    tarantulas.forEach(item => {
        let row = document.createElement("tr");
            Object.entries(item).forEach(entry => {
            const [key, value] = entry;
            let cell = document.createElement("td");
            cell.style.border = "solid"
            cell.style.borderWidth = "1px"
            if (key === "Wikipedia") {
                link = document.createElement("A");
                link.setAttribute("href", value);
                link.setAttribute("target", "_blank")
                link.innerHTML = "Click Here"
                cell.appendChild(link)
            }
            else if (key === "T-Color") {
                cell.style.backgroundColor = value
            }
            else {
            cell.appendChild(document.createTextNode(value));
            } 
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    return table;
};

document.getElementById("table").appendChild(createTable());