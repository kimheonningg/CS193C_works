var entered = document.getElementById("enteredSentence").value;
var wordType = new Array();
var words = new Array();
var count = 0; //counts the number of _
var countSpaces = 0;
var showPuzzle = document.getElementById("puzzle");
var grammarCount = 0;
var res = document.getElementById("result");
var inputGrammar = new Array();
var inputWord;

function make_Mad_Lib() {
    words = new Array();
    wordType = new Array();
    count = 0;
    countSpaces = 0;
    grammarCount = 0;
    inputGrammar = new Array();
    let entered = document.getElementById("enteredSentence").value;
    let tempString = "";
    for (let i = 0; i<entered.length; i++) {
    countSpaces++;
       if(entered[i] != "_") { tempString=tempString+entered[i] ;}
       else { //entered[i]=="_"
            count++;
            if(count % 2 == 0) { 
                wordType.push("grammar");
                words.push(tempString); 
            }
            else { 
                wordType.push("word");
                words.push(tempString); 
            }
            tempString="";
       }
       if(countSpaces == entered.length) {
        wordType.push("word");
        words.push(tempString); 
        }
    }
    createPuzzle();    
}

function createPuzzle() {
    document.getElementById("puzzle").innerHTML = "";
    for(let i = 0; i<words.length; i++) {
        if(wordType[i]=="grammar") {
            grammarCount ++;
            showPuzzle.innerHTML += "<input type='text' id = '" + grammarCount + "' size='15' placeholder = '" + words[i]+ "'/>" ;
        }
        else { //word
            showPuzzle.innerHTML += words[i];
        }
    }
}

function show_Result() {
    res.innerHTML = "";
    for(let i=0; i<grammarCount; i++) { 
        inputWord = document.getElementById(i+1);
        inputGrammar.push(inputWord.value); 
    }

    let tempGrammar = 0;
    for(let i=0; i<words.length; i++) {
        if(wordType[i]=="grammar") {
            res.innerHTML += inputGrammar[tempGrammar];
            tempGrammar++;
        }
        else { //word
            res.innerHTML += words[i];
        }
    }
}

document.getElementById("makeMadLib").addEventListener("click", make_Mad_Lib);
document.getElementById("showResult").addEventListener("click", show_Result);