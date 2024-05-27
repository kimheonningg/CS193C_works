function changeToRed() {
	document.getElementById('car_color_image').src='red.jpg';
}

function changeToBlue() {
	document.getElementById('car_color_image').src='blue.jpg';
}

function changeToSilver() {
	document.getElementById('car_color_image').src='silver.jpg';
}

function changeToWhite() {
	document.getElementById('car_color_image').src='white.jpg';
}

function changeToBlack() {
	document.getElementById('car_color_image').src='black.jpg';
}


document.getElementById("Red").addEventListener("click",changeToRed);
document.getElementById("Blue").addEventListener("click",changeToBlue);
document.getElementById("Silver").addEventListener("click",changeToSilver);
document.getElementById("White").addEventListener("click",changeToWhite);
document.getElementById("Black").addEventListener("click",changeToBlack);