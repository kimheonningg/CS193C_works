function update(){
    var univArray = new Array(
        {name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757},
        {name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844},
        {name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398},
        {name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468},
        {name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496},
        {name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276},
        {name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435},
        {name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450},
        {name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812},
        {name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918}
    );

    var ownership = document.getElementsByName("school_type");

    if(ownership[0].checked==true){ 
        for(var i=0; i<univArray.length; i++) {
            if(univArray[i].ownership != "public") { 
				univArray.splice(i,1); 
				i--;
			}
        }
    }

    else if(ownership[1].checked==true){ 
        for(var i=0; i<univArray.length; i++) {
            if(univArray[i].ownership != "private") { 
				univArray.splice(i,1); 
				i--;
			}
        }
    }

    let max_tuition = document.getElementById("max_tuit").value; 
    if(max_tuition.toString() != '') { 
        var max_tuition_value = parseInt(max_tuition); 
        for(var i=0; i<univArray.length; i++) {
            if(univArray[i].tuition > max_tuition) {
                univArray.splice(i,1);
                i--;
            }
        }
    }

    let max_sat_high = document.getElementById("max_sat").value;
    if(max_sat_high.toString() != '') {
        var max_sat_high_value = parseInt(max_sat_high);
        for(var i=0; i<univArray.length; i++) {
            if(univArray[i].SATh > max_sat_high_value) {
                univArray.splice(i,1);
                i--;
            }
        }
    }

    let min_sat_low = document.getElementById("min_sat").value;
    if(min_sat_low.toString() != '') {
        var min_sat_low_value = parseInt(min_sat_low);
        for(var i=0; i<univArray.length; i++) {
            if(univArray[i].SATl < min_sat_low_value) {
                univArray.splice(i,1);
                i--;
            }
        }
    }

    var show_table = document.getElementById("table_left");
    show_table.innerHTML = '<thead> <tr> <th class="table_left_th"> Name </th> <th class="table_left_th"> SAT High </th> <th class="table_left_th"> SAT Low </th> <th class="table_left_th"> Tuition </th></tr> </thead> <tbody id="table_left_body"> </tbody>';

    for (var i=0; i < univArray.length; i++) {
        if(i%2==0) {
            var insert_row = "<tr class='table_left_tr_even'><td class='table_left_td'>" + univArray[i].nickname + "</td><td class='table_left_td'>" + univArray[i].SATh + "</td><td class='table_left_td'>" + univArray[i].SATl + "</td><td class='table_left_td'>" + univArray[i].tuition+ "</td></tr>";  
        }
        else {
            var insert_row = "<tr class='table_left_tr_odd'><td class='table_left_td'>" + univArray[i].nickname + "</td><td class='table_left_td'>" + univArray[i].SATh + "</td><td class='table_left_td'>" + univArray[i].SATl + "</td><td class='table_left_td'>" + univArray[i].tuition+ "</td></tr>";  
        }
        show_table.innerHTML += insert_row;
    }

}

document.getElementById("update").addEventListener("click", update);
