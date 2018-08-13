var wins=0;
var losses=0;


function begin(){
    console.log("begin");
    
    //initialize
    
    document.getElementById("person").style.display="none";

    document.getElementById("rope").style.display="initial";
    

    document.getElementById("outcome").innerHTML="";
    
    //create a list of potential words
    
    var wordList = [
        "LED_ZEPPELIN",
        "PINK_FLOYD",
        "DOORS",
        "BEATLES",
        "VIOLENT_FEMMES",
        "PIXIES",
        "JANE'S_ADDICTION",
        "MODEST_MOUSE",
        "TOOL",
        "RADIOHEAD",
        "SMASHING_PUMPKINS",
        "DEATHCAB_FOR_CUTIE",
        "NIRVANA",
        "PEARL_JAM",
        "SOUND_GARDEN",
        "DEF_LEOPARD",
        "NINE_INCH_NAILS",
        "DEVIL_MAKES_THREE",
        "RAILROAD_EARTH",
        "TRAMPLED_BY_TURTLES",
        "HOT_BUTTERED_RUM",
        "JACKSON_FIVE",
        "CANNED_HEAT",
        "RUSH",
        "BLACK_SABBATH",
        "BEASTIE_BOYS",
        "RUN_DMC",
        "EMINEM",
        "FUGIES",
        "DIGABLE_PLANET",
        "MASSIVE_ATTACK",
        "PORTISHEAD",
        "THIEVERY_CORPORATION",
        "ABBA",
        "SHPONGLE",
        "DEFTONES",
        "CLUTCH",
        "DEAD_KENNEDIES",
        "BAD_RELIGION",
        "SEX_PISTOLS",
        "VANDALS",
        "REM",
        "VELVET_UNDERGROUND",
        "SUBLIME",
        "CREAM",
        "TALKING_HEADS",
        "THEY_MIGHT_BE_GIANTS"

        
        
    ];
    
    var word = "";
    var realWordLength = 0;
    var wordSpaces = [];
    var wordLength = 0;
    var head = document.getElementById("head");
    var body = document.getElementById("body");
    var leftArm = document.getElementById("leftArm");
    var rightArm = document.getElementById("rightArm");
    var leftLeg = document.getElementById("leftLeg");
    var rightLeg = document.getElementById("rightLeg");
    var rope = document.getElementById("rope");
    
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
    
    document.getElementById("instructions").innerHTML=`There are ${realWordLength} letters int this band name`;
    
    
    document.getElementById("spaces").innerHTML=wordString;
    
    //put the rejected letters in the reject div
    
    document.getElementById("rejects").innerHTML=rejectArray;
    
    //event listener
    
    document.onkeyup=function(event){
        var guess = event.key;
        console.log("guess ", guess);
        var Guess = guess.toUpperCase();
        console.log("Guess ", Guess)
        var k = 0;
        
        //is the letter correct? if so post it
        
        for(i=0; i<word.length; i++){
            if(Guess===word[i]){
                wordSpaces.splice(i,1,word[i]);
                k++;
                console.log("k",k);
                console.log("wordSpaces",wordSpaces);
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
        console.log("wordString",wordString);
        
        for(i=0; i<wordSpaces.length; i++){
            
            wordString += wordSpaces[i];
        }
        
        console.log("final wordString",wordString);
        
        //post it with guessed letters revealed
        
        document.getElementById("spaces").innerHTML=wordString; 
        
        //test to see if win or loss
        var n = wordString.includes("_");
        if(!n){
            document.getElementById("outcome").innerHTML="You WIN!!!";
            wins++;
            document.getElementById("wins").innerHTML=`Wins: ${wins}`;
        }
        
        
        if(guessesLeft === 6){
            console.log("6 guessees left");
            head.style.display="compact";
            console.log("head on");
            rope.style.display="none";
            console.log("rope off");
        }
        
        if(guessesLeft <= 0){
            document.getElementById("outcome").innerHTML="You Lose";
            losses++
            document.getElementById("losses").innerHTML=`Losses: ${losses}`;
        }
        
    }
    
    

};