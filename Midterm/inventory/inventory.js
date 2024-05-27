var inventoryList = [
    {name:  "Desk",
     category: "Furniture",
     amount: 1},
     {name:  "Chair",
     category: "Furniture",
     amount: 3},
     {name:  "Laptop",
     category: "Equipment",
     amount: 4},
     {name:  "Stapler",
     category: "Supplies",
     amount: 3},
];

var entryName = document.getElementById("entry_name").value; //string type
var entryCategory = document.getElementById("entry_category").value; //string type
var entryAmount = parseInt(document.getElementById("entry_amount").value); //number type
var newItem = true; //if entered item is new

var lookupName = document.getElementById("lookup_name").value; //string type
var lookupCategory = document.getElementById("lookup_category").value; //string type
var lookupResults = document.getElementById("results");
var noItem = true; //if there is no matching item on the list

function addToInventory() { //add data to inventory
    for (let i=0; i<inventoryList.length; i++) {
        if(document.getElementById("entry_name").value===inventoryList[i].name && document.getElementById("entry_category").value===inventoryList[i].category) {
            inventoryList[i].amount += parseInt(document.getElementById("entry_amount").value);
            newItem = false;
        }
    }

    if(newItem) { //add new item to inventoryList
        let tempObject = {};
        tempObject.name = document.getElementById("entry_name").value;
        tempObject.category = document.getElementById("entry_category").value;
        tempObject.amount = parseInt(document.getElementById("entry_amount").value);

        inventoryList.push(tempObject);
    }
}

function lookupData() { //look up for the data
    lookupResults.innerHTML = "";

    if(document.getElementById("lookup_name").value === "" && document.getElementById("lookup_category").value === "") { //everything blank
        //list all items in the inventory
        noItem = false;
        lookupResults.innerHTML += "<ul>";
        for (let i=0; i<inventoryList.length; i++) {
            lookupResults.innerHTML += "<li>" + inventoryList[i].name + ", category: " + inventoryList[i].category + ", amount: " + inventoryList[i].amount + "</li>"; 
        }
        lookupResults.innerHTML += "</ul>";
    }

    if(document.getElementById("lookup_name").value === "" && document.getElementById("lookup_category").value !== "") { //name blank but category provided
        //list all items in the category
        for(let i=0; i<inventoryList.length; i++){
            if(document.getElementById("lookup_category").value === inventoryList[i].category) { //category matches
                noItem = false;
                lookupResults.innerHTML += "<li>" + inventoryList[i].name + ", category: " + inventoryList[i].category + ", amount: " + inventoryList[i].amount + "</li>"; 
            }
        }
    }

    if(document.getElementById("lookup_name").value !== "" && document.getElementById("lookup_category").value === "") { //name provided but category blank
        //list all items with the name
        for(let i=0; i<inventoryList.length; i++){
            if(document.getElementById("lookup_name").value === inventoryList[i].name) { //name matches
                noItem = false;
                lookupResults.innerHTML += "<li>" + inventoryList[i].name + ", category: " + inventoryList[i].category + ", amount: " + inventoryList[i].amount + "</li>"; 
            }
        }
    }

    if(document.getElementById("lookup_name").value !== "" && document.getElementById("lookup_category").value !== "") { //both name and category provided
        //list all items with the name and category
        for(let i=0; i<inventoryList.length; i++){
            if(document.getElementById("lookup_name").value === inventoryList[i].name && document.getElementById("lookup_category").value === inventoryList[i].category) {
                noItem = false;
                lookupResults.innerHTML += "<li>" + inventoryList[i].name + ", category: " + inventoryList[i].category + ", amount: " + inventoryList[i].amount + "</li>"; 
            }
        }
    }

    if(noItem) {
        lookupResults.innerHTML += "No matching items";
    }
}

document.getElementById("entry_add").addEventListener("click", addToInventory);
document.getElementById("lookup").addEventListener("click", lookupData);