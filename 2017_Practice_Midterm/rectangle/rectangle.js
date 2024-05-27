var clickedTimes = 0;
var x_position_1;
var y_position_1;
var x_position_2;
var y_position_2;
var recWidth;
var recHeight;
var showX = document.getElementById("x_position");
var showY = document.getElementById("y_position");
var showWidth = document.getElementById("rec_width");
var showHeight = document.getElementById("rec_height");
var drawRec = document.getElementById("draw_rec");
var selectCol = document.getElementById("color_choose");
var recColor="";

function updatePosition() {
    if(showX.value.toString() !== '') { x_position_1 = parseInt(showX.value); }
    if(showY.value.toString() !== '') { y_position_1 = parseInt(showY.value); }
    if(showWidth.value.toString() !== '') { 
        if(parseInt(showWidth.value) < 0) { x_position_2 = x_position_1 - parseInt(showWidth.value); }
        else { x_position_2 = x_position_1 + parseInt(showWidth.value); }
    }
    if(showHeight.value.toString() !== '') { 
        if(parseInt(showHeight.value) < 0) { y_position_2 = y_position_1 - parseInt(showHeight.value); }
        else { y_position_2 = y_position_1 + parseInt(showHeight.value); }
    }
    recColor = selectCol.value;
    makeRectangle();
}

function deleteRec() {
    document.getElementById("draw_rec").innerHTML = "";
    clickedTimes = 0;
}

function clickedScreen(event) {
    if(event.target.tagName !== "BUTTON" && event.target.tagName !== "INPUT" && event.target.tagName !== "SELECT") {
        clickedTimes++;

        if(clickedTimes==1) { //first click: first vertex
            x_position_1 = event.clientX;
            y_position_1 = event.clientY;
        }

        else if (clickedTimes==2) { //second click: make the rectangle
            x_position_2 = event.clientX;
            y_position_2 = event.clientY;
            recWidth = Math.abs(x_position_2 - x_position_1);
            recHeight = Math.abs(y_position_2 - y_position_1);
            showWidth.value = recWidth;
            showHeight.value = recHeight;
            let temp;
            if( x_position_2 < x_position_1 ) { 
                temp = x_position_1;
                x_position_1 = x_position_2;
                x_position_2 = temp; 
            }
            if( y_position_2 < y_position_1 ) {
                temp = y_position_1;
                y_position_1 = y_position_2;
                y_position_2 = temp; 
            }
            showX.value = x_position_1;
            showY.value = y_position_1;
            makeRectangle();
        }
    }
}

function makeRectangle() {
    drawRec.innerHTML = "";
    if(recColor==="") {
        drawRec.innerHTML += " <div style = 'width: " + recWidth + "px; height: " + recHeight + "px; border: 1px solid black; position: absolute; top: " + y_position_1 + "px; left: "+ x_position_1 +"px; '> </div>";
    }
    else {
        drawRec.innerHTML += " <div style = 'width: " + recWidth + "px; height: " + recHeight + "px; border: 1px solid black; position: absolute; top: " + y_position_1 + "px; left: "+ x_position_1 +"px; background-color: " + recColor+ ";" + " '> </div>";
    }
}

document.getElementById("update").addEventListener("click", updatePosition);
document.getElementById("delete").addEventListener("click", deleteRec);
window.addEventListener("click", clickedScreen);