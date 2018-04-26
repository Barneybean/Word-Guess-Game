var wordList=["mount", "denali","bike","belongs to","the","prince","william"];
var guess=[];
var underDash=[];
var wins=0;
var singleWord=wordList[Math.floor(Math.random()*wordList.length)];
var life=15;
// print life and wins
document.getElementById("life").innerHTML=life;
document.getElementById("wins").innerHTML=wins;
// to pick a word from the array
// var splitted=[];

// show singleWord is already an array

// function split() {
//     for( var i=0; i<singleWord.length; i++) {
//         splitted.push(singleWord[i]);
//     }
// };
// var answer=split();
// console.log(splitted);
// to seperate word into single characters.

function printunderdash(){
    for (i=0; i<singleWord.length; i++){
        if (singleWord[i] === " ") {
            underDash.push(" ");
        }
        else{
        underDash.push("_");
        };
    };
    document.getElementById("display").innerHTML=underDash;
}

// call function to print underdashes
printunderdash(); 


document.onkeyup=function(hangman){

    var userInput=hangman.key;
     // to find index of all matching letters
    var allMatch=[];
    guess.push(userInput);
    // guess.forEach(function (element){element=element.toUpperCase();});  ???????
    document.getElementById("selections").innerHTML=guess;
    
    for (var j=0; j<singleWord.length;j++){
        if(singleWord[j]===userInput){
            allMatch.push(j);
        }
    }
        for (var e=0; e<allMatch.length; e++){
            underDash[allMatch[e]]=userInput;
        }
        
        life--;
        // if(){}
        // add if all correct
    if ((underDash === singleWord) && (life > 0)){
            wins++;
            document.getElementById("wins").innerHTML=wins;
            
            // play music and reset
    }
    else if((underDash !== singleWord) && (life = 0)){
        // dead
        life=15;
        singleWord=wordList[Math.floor(Math.random()*wordList.length)];
        underDash=[];
        printunderdash();
        guess=[];
        document.getElementById("last").innerHTML="Last Answer is: "+singleWord;
        document.getElementById("life").innerHTML=life;
        document.getElementById("selections").innerHTML=guess;
        // document.getElementById("logo").scr="../images/tryagain.jpg";
        // dontwork
    }
    else{
        //still alive
        document.getElementById("display").innerHTML=underDash;
        document.getElementById("life").innerHTML=life;
    }
    
}