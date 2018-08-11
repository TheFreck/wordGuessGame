var word;
var realWordLength=0;
var wordSpaces;
var word;

function begin(){
    
    console.log("begin");
    var wordList = [
        "LED_ZEPPELIN",
        "PINK_FLOYD",
        "THE_DOORS",
        "THE_BEETLES",
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
        ""
    ];
    var wordIndex = Math.floor(Math.random() * wordList.length);
    word = wordList[wordIndex];
    console.log(word);
    wordLength = word.length;
    
    
    for(i=0; i<wordLength; i++){
        if(word[i] === "_"){
            wordSpaces = wordSpaces + "&nbsp";
        }else if(word[i] === "'"){
            
            wordSpaces = wordSpaces + word[i];
        }else{
            wordSpaces = wordSpaces + " _ ";
            realWordLength = realWordLength + 1;
            
        }
    }


    document.getElementById("instructions").innerHTML=`This is a ${realWordLength} letter word`;
    
    
    
    
    
    document.getElementById("spaces").innerHTML=wordSpaces;
    console.log(wordSpaces);
    wordSpaces.splice(0,1);
    console.log(wordSpaces);
}





document.onkeyup=function(event){
    var guess=event.key;
    console.log("guess " + guess);
    var Guess=guess.toUpperCase();
    console.log("Guess " + Guess)

    for(i=0; i<realWordLength; i++){
        if(Guess===word[i]){
            wordSpaces.slice(i, 1, word[i]);   
            console.log(wordSpaces);
        }else{
            console.log(wordSpaces);
        }
        
    }
    document.getElementById("spaces").innerHTML=wordSpaces;
}

