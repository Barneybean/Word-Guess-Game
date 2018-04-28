var wordList=["the","bike","mount","denali","prince","william","belongs to"];
var guess=[];
var correctInputSoFar=[];
var life;
var wins;
var singleWord;
var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



function printunderdash() {
    for (i=0; i<singleWord.length; i++){
        if (singleWord[i] === " ") {
            correctInputSoFar.push(" ");
        }
        else{
        correctInputSoFar.push("_");
        };
    };
    document.getElementById("display").innerHTML=correctInputSoFar;
}

function playAudio() {
    document.getElementById("victory").play();
}
function pauseAudio() {
    document.getElementById("victory").pause();
}

// to reset game
function reset() {
    life=15;
    wins=0;
    correctInputSoFar=[];
    guess=[];
    singleWord=wordList[Math.floor(Math.random()*wordList.length)];
    printunderdash(); 
    pauseAudio();
    document.getElementById("life").innerHTML=life;
    document.getElementById("wins").innerHTML=wins;
    document.getElementById("logo").src="assets/images/logo.jpg";
}

// click to start
document.getElementById('btn').addEventListener("click", function () {
   reset();
   document.getElementById("selections").innerHTML=guess;
});

document.onkeyup=function(hangman) {
    pauseAudio();
    var userInput=hangman.key;
     // to find index of all matching letters
    if (!alphabet.includes(userInput)) return;
     
    var allMatch=[];

    guess.push(userInput.toUpperCase());
    // guess.forEach(function (element){element=element.toUpperCase();});  ???????
    document.getElementById("selections").innerHTML=guess;

    // to replace matching letters
    for (var j=0; j<singleWord.length;j++) {
        if(singleWord[j]===userInput) {
            allMatch.push(j);
        }
    }
    for (var e=0; e<allMatch.length; e++) {
        correctInputSoFar[allMatch[e]]=userInput;
    }
    
    document.getElementById("display").innerHTML=correctInputSoFar;

    if (life>0) {
        // complete word - win
        if (!correctInputSoFar.includes("_")) {
            // arrays cant be compared to each other
                wins++;
                document.getElementById("wins").innerHTML=wins+"<br>Enter New Letter <br> or <br> click to start a new Game";
                playAudio();
                correctInputSoFar=[];
                singleWord=wordList[Math.floor(Math.random()*wordList.length)];
                printunderdash();
                guess=[];
                document.getElementById("selections").innerHTML=guess;
                life=15;
                document.getElementById("life").innerHTML=life;
                // play music and reset
        }
        // word not complete - continue
        else {
        life--;
        document.getElementById("life").innerHTML=life;
        }
    }
    else {
        document.getElementById("wins").innerHTML=wins;
        document.getElementById("last").innerHTML="Answer is: "+"<h3>"+singleWord+"<h3>"+" <br>click to start a new Game";
        document.getElementById("logo").src="assets/images/tryagain.jpg";
        document.getElementById("life").innerHTML=0;
        document.getElementById("selections").innerHTML=" ";
    }
     
};