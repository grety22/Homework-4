$(document).ready(function(){

    
var enemiesAlready = new Array;
var currentPlayer = {};
var clickedID = ''; 
var state = false;

$('#i0, #i1, #i2, #i3').on('click', startGame);    
    
var character = [
    { 
                     "id" : "i0",
                   "name" : "Batman",
//                  health power hp
                     "hp" : 100,
//                  attack power ap
                     "ap" : 10,
//                  counter attack power cap    
                    "cap" : 0,
       "characterImgPath" : "assets/img/batman.png",

            },
    { 
                     "id" : "i1",
                   "name" : "Hulk",
//                  health power hp
                     "hp" : 150,
//                   attack power ap
                     "ap" : 5,
//                  counter attack power cap    
                    "cap" : 0,
       "characterImgPath" : "assets/img/hulk.png",

            },
    { 
                      "id" : "i2",
                    "name" : "Spiderman",
//                  health power hp
                      "hp" : 200,
//                  attack power ap
                      "ap" : 15,
//                  counter attack power cap    
                     "cap" : 0,
        "characterImgPath" : "assets/img/spiderman.png",

            },
    
    { 
                      "id" : "i3",
                    "name" : "Captain America",
//                  health power hp
                      "hp" : 150,
//                  attack power ap
                      "ap" : 20,
//                  counter attack power cap    
                     "cap" : 0,
        "characterImgPath" : "assets/img/captain-america.png",
            },
]

function startGame(event){
    getIDwhenClick(event);
    hideOtherCharacters();
    showSpan();
    
    
    
//    
    
};

function showValuesPlayer(){    
   for (var j = 0; j<character.length; j++){
        if(character[j].id == clickedID){
            var hp = character[j].hp;
            var cap = character[j].cap;
            var ap = character[j].ap;
            $('#HPplayer').text(hp);
            $('#CAPplayer').text(cap);
            $('#APplayer').text(ap);
        }
    }    
 }   
    
    
function disableCharactersClick(){
    $('#i0, #i1, #i2, #i3').off();    
}    
    
function selectEnemy(){
  
}    
    
function getIDwhenClick(event){
    clickedID = event.target.id;
    alert( "clicked: " + event.target.id );
    
};

function hideOtherCharacters(){
    if (state === false){
        showValuesPlayer();
    for (var i = 0; i<4; i++){
        var IDcompare= 'i'+i;
        var IDshar = '#'+IDcompare;
        var IDotro = IDshar+'j';
        var withShar = '#i'+i+'c';
        var enemiesArea = "#enemiesArea";
        var fightArea = "#fightingArea";
        if (IDcompare == clickedID){
            setCharacters(clickedID,withShar,fightArea);
        }else{
            $(IDshar).addClass('opaNoPointer');
            setCharacters(IDshar,withShar,enemiesArea);
        }
        
    }
        }else{
            alert('guao');
//            
        }
        

   
};

function selectEnemy(b,c,place){

  state = true;
  var mainDiv = $(c);
  var mainDivClon = mainDiv.clone(true, true); 
  var circle = mainDivClon.find(b);
  mainDivClon.appendTo(place);     
  circle.removeClass('opaNoPointer');
  circle.attr("id",b+"a"); 
  disableCreated();
    
    
}    
    
    
function disableCreated(){
    $('#i1j, #i2j, #i3j').off('click');  
}

function showSpan(){
    getCharacterName();
    $('#spanShow').removeClass('invisible');
    
};

function getCharacterName(){
    for (var j = 0; j<character.length; j++){
        if(character[j].id == clickedID){
            var name = character[j].name;
            $('#spanShowName').text(name);
        }
    }
};
    
    
function setCharacters(b,c,place){
  state = true;
  var mainDiv = $(c);
  var mainDivClon = mainDiv.clone(true, true); 
  var circle = mainDivClon.find(b);
  mainDivClon.appendTo(place);     
  circle.removeClass('opaNoPointer');
  circle.attr("id",b+"j"); 
  disableCreated();
    
} 
    
 
    
    
});