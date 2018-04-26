var wordList=["mount", "denali","bike","belongs to","the","prince","william"];
var guess=[];
var underScore=[];
var wins=0;
var singleWord=wordList[Math.floor(Math.random()*wordList.length)];
var life=15;

function printunderdash(){
    for (i=0; i<singleWord.length; i++){
        if (singleWord[i] === " ") {
            underScore.push(" ");
        }
        else{
        underScore.push("_");
        };
    };
    document.getElementById("display").innerHTML=underScore;
}

function playAudio(){
    document.getElementById("victory").play();
}
function pauseAudio(){
    document.getElementById("victory").pause();
}

// click to start
document.getElementById('btn').addEventListener("click", function (){
    underScore=[];
    printunderdash(); 
    document.getElementById("life").innerHTML=life;
    document.getElementById("wins").innerHTML=wins;
    pauseAudio();
});

document.onkeyup=function(hangman){
    // take away a life for every user input
    life--;
    document.getElementById("life").innerHTML=life;
    var userInput=hangman.key;
     // to find index of all matching letters
    var allMatch=[];
    guess.push(userInput.toUpperCase());
    // guess.forEach(function (element){element=element.toUpperCase();});  ???????
    document.getElementById("selections").innerHTML=guess;

    for (var j=0; j<singleWord.length;j++) {
        if(singleWord[j]===userInput) {
            allMatch.push(j);
        }
    }
    for (var e=0; e<allMatch.length; e++) {
        underScore[allMatch[e]]=userInput;
    }
       
    document.getElementById("display").innerHTML=underScore;

    if ((!underScore.includes("_")) && (life > 0)) {
        // arrays cant be compared to each other
            wins++;
            document.getElementById("wins").innerHTML=wins+"<br> click to start a new Game";
            playAudio();
            // play music and reset
    }
    else if((underScore.includes("_")) && (life <=0)) {
        // dead
        life=15;
        underScore=[];
        guess=[];
        document.getElementById("last").innerHTML="Last Answer is: "+singleWord+" <br>click to start a new Game";
        singleWord=wordList[Math.floor(Math.random()*wordList.length)];
        document.getElementById("logo").src="assets/images/tryagain.jpg";
        // dontwork
    }

    // else if((underScore.includes("_")) && (life >0)) {
    //     // still alive 
        
    // }

    else {
        
        
        // document.getElementById("life").innerHTML=life;
    }
    
}