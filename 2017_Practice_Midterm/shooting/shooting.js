var targetTypes = [
    {img:  "ten.png",
     hit_img: "ten-hit.png",
     prob: 55,
     point: 10,
     time: 2000,
     width: 120,
     height: 120},
     {img:  "twenty.png",
     hit_img: "twenty-hit.png",
     prob: 35,
     point: 20,
     time: 1000,
     width: 80,
     height: 80},
     {img:  "fifty.png",
     hit_img: "fifty-hit.png",
     prob: 10,
     point: 50,
     time: 500,
     width: 50,
     height: 50}
];

var randNum;
var currentTarget;
var randX;
var randY;
var targetImg = document.getElementById("target");
var score = 0;
var targetsLeft = 7;
var timeoutReset;
var timeoutDiss;

function playGame() {
    document.getElementById("play_button").innerHTML = "";
    setTimeout(displayTarget, 5000);
}

function displayTarget() {
    if(targetsLeft <= 0) {
        gameDone();
        return;
    }
    //deciding target type
    randNum = parseInt(Math.random()*100+1); //integers between 1 and 100
    if(randNum <= targetTypes[0].prob) { //target ten
        currentTarget = 0;
    }
    else if(randNum <= targetTypes[0].prob + targetTypes[1].prob) { //target twenty
        currentTarget = 1;
    }
    else { //target fifty
        currentTarget = 2;
    }

    //deciding target location
    randX = parseInt(Math.random()*(800-targetTypes[currentTarget].width)+1); //integers between 1 and 800
    randY = parseInt(Math.random()*(400-targetTypes[currentTarget].height)+1); //integers between 1 and 400

    //make target visible on scree
    targetImg.innerHTML = "";
    targetImg.innerHTML += "<img src = '" + targetTypes[currentTarget].img + "' alt='target photo' width = '" + targetTypes[currentTarget].width + "px' height = '" + targetTypes[currentTarget].height + "px' style = 'position: absolute; top: " + randY +"px; left: " + randX + "px;' />";

    targetImg.addEventListener("click", targetHit);

    //make target disappear after few seconds
    timeoutReset = setTimeout(displayTarget, 5000);
    timeoutDiss = setTimeout(disappearTarget, targetTypes[currentTarget].time);
}

function targetHit() {
    clearTimeout(timeoutDiss);
    score += targetTypes[currentTarget].point;
    document.getElementById("target").innerHTML = "<img src = '" + targetTypes[currentTarget].hit_img + "' alt='target photo' width = '" + targetTypes[currentTarget].width + "px' height = '" + targetTypes[currentTarget].height + "px' style = 'position: absolute; top: " + randY +"px; left: " + randX + "px;' />";
    increaseScore();
    hit_changeTargetsLeft();
    timeoutDiss = setTimeout(disappearTarget_hit, 800);
}

function increaseScore() {
    document.getElementById("score").innerHTML = "";
    document.getElementById("score").innerHTML = "Score: " + score;
}

function hit_changeTargetsLeft() {
    targetsLeft --;
    document.getElementById("target_remain").innerHTML = "Targets Remaining: " + targetsLeft;
}

function disappearTarget() {
    targetsLeft --;
    document.getElementById("target").innerHTML = "";
    document.getElementById("target_remain").innerHTML = "Targets Remaining: " + targetsLeft;
}

function disappearTarget_hit() {
    document.getElementById("target").innerHTML = "";
}

function gameDone() {
    score = 0;
    targetsLeft = 7;
    document.getElementById("play_button").innerHTML = "<button class='play_game' type='button' id='play_game'> Play Game </button>";
    document.getElementById("play_game").addEventListener("click", playGame);
    document.getElementById("score").innerHTML = "Score: 0";
    document.getElementById("target_remain").innerHTML = "Targets Remaining: 7";
}

document.getElementById("play_game").addEventListener("click", playGame);