var wins=0;
var losses=0;

outcome.style.visibility = "hidden";

function begin(){
    console.log("begin");
    var word = "";
    var realWordLength = 0;
    var wordSpaces = [];
    var wordLength = 0;
    var head = document.getElementById("head");
    var torso = document.getElementById("torso");
    var leftArm = document.getElementById("leftArm");
    var rightArm = document.getElementById("rightArm");
    var leftLeg = document.getElementById("leftLeg");
    var rightLeg = document.getElementById("rightLeg");
    var rope = document.getElementById("rope");
    var person = document.getElementById("person");
    var outcome = document.getElementById("outcome");
    
    //initialize

    rope.style.visibility = "visible";
    head.style.visibility = "hidden";
    torso.style.visibility = "hidden";
    leftArm.style.visibility = "hidden";
    rightArm.style.visibility = "hidden";
    leftLeg.style.visibility = "hidden";
    rightLeg.style.visibility = "hidden";
    outcome.style.visibility = "hidden";
    console.log(rope);
    console.log(person);
    

    document.getElementById("outcome").innerHTML="";
    
    // list of potential band names
    
    var wordList = [
        "LED__ZEPPELIN",
        "PINK__FLOYD",
        "DOORS",
        "BEATLES",
        "VIOLENT__FEMMES",
        "PIXIES",
        "JANE'S__ADDICTION",
        "MODEST__MOUSE",
        "TOOL",
        "RADIOHEAD",
        "SMASHING__PUMPKINS",
        "DEATHCAB__FOR__CUTIE",
        "NIRVANA",
        "PEARL__JAM",
        "SOUND__GARDEN",
        "DEF__LEOPARD",
        "NINE__INCH__NAILS",
        "DEVIL__MAKES__THREE",
        "RAILROAD__EARTH",
        "TRAMPLED__BY__TURTLES",
        "HOT__BUTTERED__RUM",
        "JACKSON__FIVE",
        "CANNED__HEAT",
        "RUSH",
        "BLACK__SABBATH",
        "BEASTIE__BOYS",
        "RUN__DMC",
        "EMINEM",
        "FUGIES",
        "DIGABLE__PLANET",
        "MASSIVE__ATTACK",
        "PORTISHEAD",
        "THIEVERY__CORPORATION",
        "ABBA",
        "SHPONGLE",
        "DEFTONES",
        "CLUTCH",
        "DEAD__KENNEDIES",
        "BAD__RELIGION",
        "SEX__PISTOLS",
        "VANDALS",
        "REM",
        "VELVET__UNDERGROUND",
        "SUBLIME",
        "CREAM",
        "TALKING__HEADS",
        "THEY__MIGHT__BE__GIANTS"

        
        
    ];
    

    
    //get a random item from the list
    
    var wordIndex = Math.floor(Math.random() * wordList.length);
    word = wordList[wordIndex];
    console.log(word);
    wordLength = word.length;
    var rejectArray=[];
    
    //convert the word string into an array
    
    var wordArray=[];
    for(i=0; i<wordLength; i++){
        wordArray.push(word[i]);
    }
    
    //turn the letters into blank spaces
    
    for(i=0; i<wordLength; i++){
        if(word[i] === "_"){
            wordSpaces.push("&nbsp");
        }else if(word[i] === "'"){
            
            wordSpaces.push(word[i]);
        }else{
            wordSpaces.push(" _ ");
            realWordLength += 1;
            
        }
    }
    var guessesLeft=7;
    document.getElementById("remaining").innerHTML=`Guesses left: ${guessesLeft}`;
    
    //turn the spaces back into a string
    
    var wordString="";
    for(i=0; i<wordSpaces.length; i++){
        wordString+=wordSpaces[i];
    }
    
    //print the spaces string on the screen
    
    document.getElementById("instructions").innerHTML=`There are ${realWordLength} letters in this band name`;
    
    
    document.getElementById("spaces").innerHTML=wordString;
    
    //put the rejected letters in the reject div
    
    document.getElementById("rejects").innerHTML=rejectArray;
    
    //event listener
    
    document.onkeyup=function(event){
        var guess = event.key;
        var Guess = guess.toUpperCase();
        var k = 0;
        
        
        //is the letter correct? if so post it
        
        for(i=0; i<word.length; i++){
            if(Guess===word[i]){
                wordSpaces.splice(i,1,word[i]);
                k++;
            }
        }
        
        if(k === 0){
            guessesLeft -= 1;
            rejectArray.push(Guess);
            document.getElementById("rejects").innerHTML=`Dustbin: ${rejectArray}`;
        }
        
        
        
        document.getElementById("remaining").innerHTML=`Guesses 
        left: ${guessesLeft}`;
        
        //turn it back into a string
        wordString="";
        
        for(i=0; i<wordSpaces.length; i++){
            
            wordString += wordSpaces[i];
        }
        
        
        //post it with guessed letters revealed
        
        document.getElementById("spaces").innerHTML=wordString; 
        
        //test to see if win or loss

        var n = wordString.includes("_");
        if(!n){
            outcome.style.visibility = "visible";
            outcome.innerHTML="You WIN!!!";
            wins++;
            document.getElementById("wins").innerHTML=`Wins: ${wins}`;
        }

        
        if(guessesLeft === 6){
            console.log("6 guessees left");
            head.style.visibility="visible";
            rope.style.visibility="hidden";
        }else
        if(guessesLeft === 5){
            console.log("5 guesses left");
            torso.style.visibility = "visible";
        }else
        if(guessesLeft === 4){
            console.log("4 guesses left");
            leftArm.style.visibility = "visible";
        }else
        if(guessesLeft === 3){
            console.log("3 guesses left");
            rightArm.style.visibility= "visible";
        }else
        if(guessesLeft === 2){
            console.log("2 guesses left");
            leftLeg.style.visibility= "visible";
        }else
        if(guessesLeft === 1){
            console.log("1 guesses left");
            rightLeg.style.visibility= "visible";
        }else
        if(guessesLeft === 0){
            document.getElementById("outcome").innerHTML="You Lose";
            losses++
            document.getElementById("losses").innerHTML=`Losses: ${losses}`;
            outcome.style.visibility = "visible";
            document.getElementById("spaces").innerHTML=word;
        }else{
            console.log("error");
        }
        
    }
    
    

};