var mapTypes = ["map-s.gif", "map-m.gif", "map-l.gif", "map-xl.gif"];
var imageArray = new Array();
for (var i=0; i < mapTypes.length; i++) {
    imageArray[i] = new Image();
    imageArray[i].src = mapTypes[i];
}
var mapWidths = [1283, 2047, 3063, 4084];
var mapHeights = [997, 1589, 2373, 3164];
var currentSize = 0; //0:s, 1:m, 2:l, 3:xl
var frameWidth = window.innerWidth;
var frameHeight = window.innerHeight;
var shownMap = document.getElementById("map_pic");
var mapFrame = document.getElementById("map_frame");
var currentCenterRatioTop;
var currentCenterRatioLeft;
var newCenter_x;
var newCenter_y;
var ifDraging = false;
var x_position;
var y_position;
var index = 0;
var change_x;
var change_y;

function handleMouseDown(event) {
    ifDraging = true;
    event.preventDefault();
    x_position.push(event.clientX);
    y_position.push(event.clientY);
}

function handleMouseMove(event) {
    if(ifDraging) {
        mapFrame.style.cursor = "move";
        x_position.push(event.clientX);
        y_position.push(event.clientY);
        change_x = x_position[index+1] - x_position[index];
        change_y = y_position[index+1] - y_position[index];
        shownMap.style.position = "absolute";
        if(change_x < 0) { //moved left
            shownMap.style.left = shownMap.offsetLeft + change_x + "px";
        }
        if(change_x >= 0) { //moved right
            shownMap.style.left = shownMap.offsetLeft + change_x + "px";
        }
        if(change_y < 0) { //moved up
            shownMap.style.top = shownMap.offsetTop + change_y + "px";
        }
        if(change_y >= 0) { //moved down
            shownMap.style.top = shownMap.offsetTop + change_y + "px";
        }
        index++;
    }
}

function handleMouseUp(event) {
    ifDraging = false;
    mapFrame.style.cursor = "default";
    x_position = new Array;
    y_position = new Array;
    index = 0;
}

function handleDblClick(event) {
    newCenter_x = event.clientX - 60;
    shownMap.style.position = "absolute";
    if(newCenter_x < (frameWidth - 510)/2) { //left side clicked
        shownMap.style.left = shownMap.offsetLeft + ((frameWidth - 510)/2 - newCenter_x) + "px";
    }
    if(newCenter_x >= (frameWidth - 510)/2) { //right side clicked
        shownMap.style.left = shownMap.offsetLeft - (newCenter_x - (frameWidth - 510)/2) + "px";
    }

    newCenter_y = event.clientY - 50;
    if(newCenter_y < (frameHeight - 180)/2) { //top side clicked
        shownMap.style.top = shownMap.offsetTop + ((frameHeight - 180)/2 - newCenter_y) + "px";
    }
    if(newCenter_y >= (frameHeight - 180)/2) { //bottom side clicked
        shownMap.style.top = shownMap.offsetTop - (newCenter_y - (frameHeight - 180)/2) + "px";
    }
}

function resizeFrame() {
    frameWidth = window.innerWidth;
    frameHeight = window.innerHeight;
}

function zoomIn() {
    if (currentSize < 3) {
        currentCenterRatioTop = (-shownMap.offsetTop + (frameHeight - 180)/2) / mapHeights[currentSize];
        currentCenterRatioLeft = (-shownMap.offsetLeft + (frameWidth - 510)/2) / mapWidths[currentSize];
        currentSize++;
        shownMap.src = mapTypes[currentSize];
        shownMap.style.position = "absolute";
        shownMap.style.top = -mapHeights[currentSize] * currentCenterRatioTop + (frameHeight - 180)/2 + "px";
        shownMap.style.left = -mapWidths[currentSize] * currentCenterRatioLeft + (frameWidth - 510)/2 + "px";
    }
}

function zoomOut() {
    if (currentSize > 0) {
        currentCenterRatioTop = (-shownMap.offsetTop + (frameHeight - 180)/2) / mapHeights[currentSize];
        currentCenterRatioLeft = (-shownMap.offsetLeft + (frameWidth - 510)/2) / mapWidths[currentSize];
        currentSize--;
        shownMap.src = mapTypes[currentSize];
        shownMap.style.position = "absolute";
        shownMap.style.top = (-1) * mapHeights[currentSize] * currentCenterRatioTop + (frameHeight - 180)/2 + "px";
        shownMap.style.left = (-1) * mapWidths[currentSize] * currentCenterRatioLeft + (frameWidth - 510)/2 + "px";
    }
}

function moveUp() {
    shownMap.style.position = "absolute";
    shownMap.style.top = shownMap.offsetTop + (frameHeight - 180)/2 + "px";
}

function moveLeft() {
    shownMap.style.position = "absolute";
    shownMap.style.left = shownMap.offsetLeft + (frameWidth - 510)/2 + "px";
}

function moveRight() {
    shownMap.style.position = "absolute";
    shownMap.style.left = shownMap.offsetLeft - (frameWidth - 510)/2 + "px";
}

function moveDown() {
    shownMap.style.position = "absolute";
    shownMap.style.top = shownMap.offsetTop - (frameHeight - 180)/2 + "px";
}

document.addEventListener("mousedown",handleMouseDown); //starts drag
document.addEventListener("mousemove",handleMouseMove); 
document.addEventListener("mouseup",handleMouseUp); //release drag
shownMap.addEventListener("dblclick", handleDblClick);
window.addEventListener("resize", resizeFrame);

document.getElementById("zoom_in").addEventListener("click", zoomIn);
document.getElementById("zoom_out").addEventListener("click", zoomOut);
document.getElementById("move_up").addEventListener("click", moveUp);
document.getElementById("move_left").addEventListener("click", moveLeft);
document.getElementById("move_right").addEventListener("click", moveRight);
document.getElementById("move_down").addEventListener("click", moveDown);