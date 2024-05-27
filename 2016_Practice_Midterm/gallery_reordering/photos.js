var photoArray = [
	"memchu.jpg","quad.jpg", "hoop.jpg", "memorial-court.jpg"
];

var photoDisplay = document.getElementById("photo");
photoDisplay.innerHTML = "";
for(let i=0; i<photoArray.length; i++) {
	photoDisplay.innerHTML += "<img src='" + photoArray[i] + "' alt='photo' id='photo_" + i + " width='200px' height='150px' style = 'margin-right: 40px;' />";
}

var ifDraging = false;
var x_position_f; 
var y_position_f;
var firstPhoto;
var x_position_l; 
var y_position_l;
var secondPhoto;

var photoDrag = document.getElementById("photo_drag");

function handleMouseDown(event) { //starts draging
    ifDraging = true;
	x_position_f = event.clientX;
	y_position_f = event.clientY;
	if(y_position_f > 170 || y_position_f < 20 || parseInt(x_position_f/240) >= photoArray.length) { ifDraging=false; }
	else { 
		firstPhoto = parseInt(x_position_f/240); //index of chosen photo
		event.preventDefault();
	}
}

function handleMouseMove(event) { //in the process of draging
	if(ifDraging){
		//make clicked photo disappear
		photoDisplay.innerHTML = "";
		if(firstPhoto==0) {
			photoDisplay.innerHTML += "<img src='" + photoArray[1] + "' alt='photo' id='photo_" + 1 + " width='200px' height='150px' style = 'margin-left: 240px; margin-right: 40px;' />";
			for(let i=2; i<photoArray.length; i++) {
				photoDisplay.innerHTML += "<img src='" + photoArray[i] + "' alt='photo' id='photo_" + i + " width='200px' height='150px' style = 'margin-right: 40px;' />";
			}
		}
		else if(firstPhoto==photoDisplay.length-1) {
			for(let i=0; i<photoArray.length-1; i++) {
				photoDisplay.innerHTML += "<img src='" + photoArray[i] + "' alt='photo' id='photo_" + i + " width='200px' height='150px' style = 'margin-right: 40px;' />";
			}
		}
		else {
			for(let i=0; i<photoArray.length; i++) {
				if(i==firstPhoto-1) {
					photoDisplay.innerHTML += "<img src='" + photoArray[i] + "' alt='photo' id='photo_" + i + " width='200px' height='150px' style = 'margin-right: 280px;' />";
				}
				else if (i != firstPhoto) {
					photoDisplay.innerHTML += "<img src='" + photoArray[i] + "' alt='photo' id='photo_" + i + " width='200px' height='150px' style = 'margin-right: 40px;' />";
				}
			}
		}

		//drag the clicked photo
		photoDrag.innerHTML = "";
		photoDrag.innerHTML += "<img src='" + photoArray[firstPhoto] + "' alt='photo' id='photo_" + firstPhoto + " width='200px' height='150px' style = 'margin-left:" + (event.clientX - x_position_f + 240 * (firstPhoto) + 20) + "px; margin-top:" + (event.clientY - y_position_f -220)+ "px;' />";
	}
}

function handleMouseUp(event) { //ends draging
	if (ifDraging) {
		x_position_l = event.clientX;
		y_position_l = event.clientY;
		if(parseInt(x_position_l/240) < photoArray.length && y_position_l <= 190) { //swap
			secondPhoto = parseInt(x_position_l/240); //index of chosen photo
			let temp = photoArray[firstPhoto];
			photoArray[firstPhoto] = photoArray[secondPhoto];
			photoArray[secondPhoto] = temp;
			photoDisplay.innerHTML = "";
			for(let i=0; i<photoArray.length; i++) {
				photoDisplay.innerHTML += "<img src='" + photoArray[i] + "' alt='photo' id='photo_" + i + " width='200px' height='150px' style = 'margin-right: 40px;' />";
			}
		}
		else {
			photoDisplay.innerHTML="";
			for(let i=0; i<photoArray.length; i++) {
				photoDisplay.innerHTML += "<img src='" + photoArray[i] + "' alt='photo' id='photo_" + i + " width='200px' height='150px' style = 'margin-right: 40px;' />";
			}
		}
		ifDraging = false;
		photoDrag.innerHTML = "";
	}
}

document.addEventListener("mousedown",handleMouseDown); //starts drag
document.addEventListener("mousemove",handleMouseMove); 
document.addEventListener("mouseup",handleMouseUp); //release drag