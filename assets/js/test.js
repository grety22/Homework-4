$(document).ready(function(){

    
var enemiesAlready = new Array;
var currentPlayer = {};
var currentEnemy = {};
var clickedID = ''; 
var state = false;
var state2 = false;

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
    attack();
};

function attack(){
//            showInfo();
    $("#attack").click(function() {
        var playerHP = parseInt($('#HPplayer').text());
        var playerAP = parseInt($('#APplayer').text());
        var enemyHP = parseInt($('#HPenemy').text());
        var rest = enemyHP-playerAP;
        var playerCAP = parseInt($('#CAPplayer').text());
            
        if (playerHP <= 0){
//             you lose
            youLose();
        }else if(enemyHP <= 0){
//             you win
            youWin();
        }else{
             $('#HPenemy').text(rest);
             playerCAP++;
             $('#CAPplayer').text(playerCAP);
             enemyAttack();    
        }
       
});
    
}
    
function youWin(){
    $('#myModalWin').modal('show');
    enemiesAlready.push(currentEnemy.id);
    alert(enemiesAlready);
    $('#fightingArea').children('.col-2').eq(3).remove();
    $('#fightingArea').children('.col-2').eq(2).hide();
    toggleEnemies();
    reselectEnemy();
}

function  reselectEnemy(){
}
    
function toggleEnemies(){
    for (var i=1; i<4; i++){
        $('#enemiesArea').children('.col-2').eq(i).toggleClass('opaNoPointer');    
    }
}
    
function youLose(){
    $('#fightingArea').children('.col-2').eq(3).remove();
    $('#HPenemy').text('0');
    $('#HPplayer').text(currentPlayer.hp);
    $('#APenemy').text('0');
    $('#CAPenemy').text('0');
    $('#enemiesArea').children('.col-2').eq(2).remove();
    $('#myModal').modal('show');

}
    
function enemyAttack(){
        var enemyAP = parseInt($('#APenemy').text());
        var playerHP = parseInt($('#HPplayer').text());
        var rests = playerHP-enemyAP;
        $('#HPplayer').text(rests);
//        alert('Enemy damage you, now your are '+ rests+' hp');
}    
    
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
    
 
function showValuesEnemy(){
	for (var j = 0; j<character.length; j++){
		var array2 = '#'+character[j].id+'j';
        if(array2 === clickedID){
            var hp = character[j].hp;
            var cap = character[j].cap;
            var ap = character[j].ap;
            $('#HPenemy').text(hp);
            $('#CAPenemy').text(cap);
            $('#APenemy').text(ap);
        }
    }    	
}

function disableCharactersClick(){
    $('#i0, #i1, #i2, #i3').off();    
}    
    
function setCharacters(b,c,place){
  state = true;
  var mainDiv = $(c);
  var mainDivClon = mainDiv.clone(true, true); 
  var circle = mainDivClon.find(b);
  mainDivClon.appendTo(place);     
  circle.removeClass('opaNoPointer');
  circle.attr("id",b+"j"); 
    
} 
    
function getIDwhenClick(event){
    clickedID = event.target.id;
//    alert( "clicked: " + event.target.id );
    
};

function clickChoosePlayer(){
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
} 
    
function clickChooseEnemy(){
    if (state2 === false){
                showValuesEnemy();
                showAttackButton();
            for (var j = 0; j<4; j++){
                var ID = '#i'+j+'j';
                if (ID == clickedID){
                    var IDcompare= 'i'+j;
                    var IDshar = '#'+IDcompare;
                    var withShar = '#i'+j+'c';
                    var fightArea = "#fightingArea";
                    selectEnemy(IDshar,withShar,fightArea);
                    currentEnemy = character[j];
                    alert('You enemy is ' +currentEnemy.name);
                }else{
                    hideEnemiesNonSelected(j); 
                }
            }
    }
}

function hideOtherCharacters(c){
    if (state === false){
        showValuesPlayer();
        clickChoosePlayer();
    }else{
        clickChooseEnemy();
    }
}

function hideEnemiesNonSelected(c){
    var toHide = $("#enemiesArea").children().eq(c);
    toHide.addClass('opaNoPointer');
}   
    
function showAttackButton(){
    var container = $('#fightingArea');
    var imag = $('<div class="col-2 d-flex align-items-center"><img id="attack" class="hov image-fluid" src="assets/img/hit%20hand.png"></div>');
    container.append(imag);
}    
    
function selectEnemy(b,c,place){
      state2 = true;
      var mainDiv = $(c);
      var mainDivClon = mainDiv.clone(true, true); 
      var circle = mainDivClon.find(b);
      mainDivClon.appendTo(place);     
      circle.removeClass('opaNoPointer');
      circle.attr("id",b+"a"); 
}    

function showSpan(){
    getCharacterName();
    $('#spanShow').removeClass('invisible');
    
};

function getCharacterName(){
    for (var j = 0; j<character.length; j++){
        if(character[j].id == clickedID){
            var name = character[j].name;
            currentPlayer = character[j];
            $('#spanShowName').text(name);
        }
    }
};
    
    

    
 
    
    
});

