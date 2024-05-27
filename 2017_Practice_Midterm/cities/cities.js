var cities_List = new Array(citiesList.length);
for(let i=0; i<citiesList.length; i++) {
    cities_List[i] = citiesList[i];
}

var min_den = document.getElementById("minDen");
var max_den = document.getElementById("maxDen");

function searchCities() {
    if(min_den.toString()!='') {
        var min_Den = parseInt(min_den.value);
        for (let i=0; i<cities_List.length; i++) {
            if(cities_List[i].density < min_Den) { //erase
                cities_List.splice(i,1);
                i--;
            }
        }
    }

    if(max_den.toString()!='') {
        var max_Den = parseInt(max_den.value);
        for (let i=0; i<cities_List.length; i++) {
            if(cities_List[i].density > max_Den) { //erase
                cities_List.splice(i,1);
                i--;
            }
        }
    }

    showResults();
}

var res = document.getElementById("results");

function showResults() {
    res.innerHTML = "";
    res.innerHTML += "<h1> Results </h1> <br>";
    for(let i=0; i<cities_List.length; i++) {
        res.innerHTML += "<h2>" + cities_List[i].name + "</h2> <br>";
        res.innerHTML += cities_List[i].country + "<br>";
        res.innerHTML += "population: " + cities_List[i].population + "<br>";
        res.innerHTML += "area: " + cities_List[i].area + " square km <br>";
        res.innerHTML += "density: " + cities_List[i].density + " per square km <br>";
    }
}

document.getElementById("search").addEventListener("click", searchCities);