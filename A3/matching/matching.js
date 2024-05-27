var click_times = 0;
var clicked_card = new Array();
var new_game = [true, true, true, true, true, true];
var is_card = [true, true, true, true, true, true];
var card_result = new Array(6); //stores '.png' Strings
var card_num = new Array(6); //stores 1 or 2 or 3 - integers
var card_type = ['images/1hearts.png', 'images/1clubs.png', 'images/2hearts.png', 'images/2clubs.png', 'images/3hearts.png', 'images/3clubs.png'];
var first_result = new Array(2);
var second_result = new Array(2);
var third_result = new Array(2);
var fourth_result = new Array(2);
var fifth_result = new Array(2);
var sixth_result = new Array(2);
var time_out = '';

function showFront1() {
    if(is_card[0]) {
        if(click_times == 0 || (click_times == 1 && clicked_card[0] != 0)) {
            if(new_game[0]) { first_result = shuffle_cards(); new_game[0]=false;}
            document.card_1.src = first_result[0];
            card_num[0] = first_result[1];
            click_times++;
            clicked_card.push(0);
        }
        if(click_times == 2){ check_alike(); }
    }
}

function showFront2() {
    if(is_card[1]) {
        if(click_times == 0 || (click_times == 1 && clicked_card[0] != 1)) {
            if(new_game[1]) { second_result = shuffle_cards(); new_game[1]=false; }
            document.card_2.src = second_result[0];
            card_num[1] = second_result[1];
            click_times++;
            clicked_card.push(1);
        }
        if(click_times == 2){ check_alike(); }
    }
}

function showFront3() {
    if(is_card[2]) {
        if(click_times == 0 || (click_times == 1 && clicked_card[0] != 2)) {
            if(new_game[2]) { third_result = shuffle_cards(); new_game[2]=false; }
            document.card_3.src = third_result[0];
            card_num[2] = third_result[1];
            click_times++;
            clicked_card.push(2);
        }
        if(click_times == 2){ check_alike(); }
    }
}

function showFront4() {
    if(is_card[3]) {
        if(click_times == 0 || (click_times == 1 && clicked_card[0] != 3)) {
            if(new_game[3]) { fourth_result = shuffle_cards(); new_game[3]=false; }
            document.card_4.src = fourth_result[0];
            card_num[3] = fourth_result[1];
            click_times++;
            clicked_card.push(3);
        }
        if(click_times == 2){ check_alike(); }
    }
}

function showFront5() {
    if(is_card[4]) {
        if(click_times == 0 || (click_times == 1 && clicked_card[0] != 4)) {
            if(new_game[4]) { fifth_result = shuffle_cards(); new_game[4]=false; }
            document.card_5.src = fifth_result[0];
            card_num[4] = fifth_result[1];
            click_times++;
            clicked_card.push(4);
        }
        if(click_times == 2){ check_alike(); }
    }
}

function showFront6() {
    if(is_card[5]) {
        if(click_times == 0 || (click_times == 1 && clicked_card[0] != 5)) {
            if(new_game[5]) { sixth_result = shuffle_cards(); new_game[5]=false; }
            document.card_6.src = sixth_result[0];
            card_num[5] = sixth_result[1];
            click_times++;
            clicked_card.push(5);
        }
        if(click_times == 2){ check_alike(); }
    }
}

function check_alike() {
    document.getElementById('card_1').style.pointerEvents = 'none';
    document.getElementById('card_2').style.pointerEvents = 'none';
    document.getElementById('card_3').style.pointerEvents = 'none';
    document.getElementById('card_4').style.pointerEvents = 'none';
    document.getElementById('card_5').style.pointerEvents = 'none';
    document.getElementById('card_6').style.pointerEvents = 'none';
    if(card_num[clicked_card[0]] == card_num[clicked_card[1]]) { //match
        is_card[clicked_card[0]] = false;
        is_card[clicked_card[1]] = false;
        time_out = setTimeout(function(){document.getElementById('card_1').style.pointerEvents = 'auto';
        document.getElementById('card_2').style.pointerEvents = 'auto';
        document.getElementById('card_3').style.pointerEvents = 'auto';
        document.getElementById('card_4').style.pointerEvents = 'auto';
        document.getElementById('card_5').style.pointerEvents = 'auto';
        document.getElementById('card_6').style.pointerEvents = 'auto'; 
        disappear_match(clicked_card[0], clicked_card[1]);}, 1500);
    }
    else { //no match found
        time_out = setTimeout(function(){document.getElementById('card_1').style.pointerEvents = 'auto';
        document.getElementById('card_2').style.pointerEvents = 'auto';
        document.getElementById('card_3').style.pointerEvents = 'auto';
        document.getElementById('card_4').style.pointerEvents = 'auto';
        document.getElementById('card_5').style.pointerEvents = 'auto';
        document.getElementById('card_6').style.pointerEvents = 'auto'; 
        return_cards(clicked_card[0], clicked_card[1]);}, 1500);
    }
}

function disappear_match(a, b) {
    if (a==0 || b==0) { document.card_1.src='images/clear.png'; }
    if (a==1 || b==1) { document.card_2.src='images/clear.png'; }
    if (a==2 || b==2) { document.card_3.src='images/clear.png'; }
    if (a==3 || b==3) { document.card_4.src='images/clear.png'; }
    if (a==4 || b==4) { document.card_5.src='images/clear.png'; }
    if (a==5 || b==5) { document.card_6.src='images/clear.png'; }
    document.body.style.pointerEvents = 'auto';
    click_times = 0;
    clicked_card = new Array();
}

function return_cards(a, b) {
    if (a==0 || b==0) { document.card_1.src='images/back.png'; }
    if (a==1 || b==1) { document.card_2.src='images/back.png'; }
    if (a==2 || b==2) { document.card_3.src='images/back.png'; }
    if (a==3 || b==3) { document.card_4.src='images/back.png'; }
    if (a==4 || b==4) { document.card_5.src='images/back.png'; }
    if (a==5 || b==5) { document.card_6.src='images/back.png'; }
    document.body.style.pointerEvents = 'auto';
    click_times = 0;
    clicked_card = new Array();
}

function restartGame(){
    if(time_out != '') {
        clearTimeout(time_out);
        time_out='';
        document.getElementById('card_1').style.pointerEvents = 'auto';
        document.getElementById('card_2').style.pointerEvents = 'auto';
        document.getElementById('card_3').style.pointerEvents = 'auto';
        document.getElementById('card_4').style.pointerEvents = 'auto';
        document.getElementById('card_5').style.pointerEvents = 'auto';
        document.getElementById('card_6').style.pointerEvents = 'auto';
    }

    document.card_1.src='images/back.png';
    document.card_2.src='images/back.png';
    document.card_3.src='images/back.png';
    document.card_4.src='images/back.png';
    document.card_5.src='images/back.png';
    document.card_6.src='images/back.png';
    card_type = ['images/1hearts.png', 'images/1clubs.png', 'images/2hearts.png', 'images/2clubs.png', 'images/3hearts.png', 'images/3clubs.png'];
    card_result = new Array(6);
    card_num = new Array(6);
    new_game = [true, true, true, true, true, true];
    is_card = [true, true, true, true, true, true];
    click_times = 0;
    clicked_card = new Array();
}

function shuffle_cards(x){
    var temp = Math.floor(Math.random() * (card_type.length-1)); //random integer between 0 and 5
    card_res = card_type[temp];
    card_result[x] = card_res;
    card_type.splice(temp,1);
    if(card_res == 'images/1hearts.png' || card_res == 'images/1clubs.png') {var card_number = 1;}
    else if (card_res == 'images/2hearts.png' || card_res == 'images/2clubs.png') {var card_number = 2;}
    else {var card_number = 3;}
    var return_array = [card_result[x], card_number];
    return return_array;
}

document.getElementById("restart_game").addEventListener("click",restartGame);
document.getElementById("card_1").addEventListener("click", showFront1);
document.getElementById("card_2").addEventListener("click", showFront2);
document.getElementById("card_3").addEventListener("click", showFront3);
document.getElementById("card_4").addEventListener("click", showFront4);
document.getElementById("card_5").addEventListener("click", showFront5);
document.getElementById("card_6").addEventListener("click", showFront6);
