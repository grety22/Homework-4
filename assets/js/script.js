//STAR WARS GAME

//Global vars





var enemiesAlready = new Array;

//array of objetcs with all the game characters either enemies or players.
var character = [
    { 
                  "name" : "Hulk",
//                  health power hp
                    "hp" : 100,
//                  attack power ap
                    "ap" : 10,
//                  counter attack power cap    
                    "cap" : 0,
       "characterImgPath" : "assets/img/hulk.png",

            },
    { 
                   "name" : "Spiderman",
//                  health power hp
                     "hp" : 150,
//                   attack power ap
                     "ap" : 5,
//                  counter attack power cap    
                    "cap" : 0,
       "characterImgPath" : "assets/img/spiderman.png",

            },
    { 
                    "name" : "Batman",
//                  health power hp
                      "hp" : 200,
//                  attack power ap
                      "ap" : 15,
//                  counter attack power cap    
                     "cap" : 0,
        "characterImgPath" : "assets/img/batman.png",

            },
    { 
                    "name" : "Incredible",
//                  health power hp
                      "hp" : 250,
//                  attack power ap
                      "ap" : 13,
//                  counter attack power cap    
                     "cap" : 0,
        "characterImgPath" : "assets/img/incredible.png",

            },
    { 
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

    
//-The player choose the character is gonna be the start of the game

//-The player will be playing with that character till the page refresh.
//*******************************

function playerChooseCha(){
    
};
//*******************************


//-The player Choose one of the Enemies availables.
//*******************************
function selectEnemy(){
//    call check if there are remaining enemies
      checkRemainingEnemies();
//    call move enemy selected
//    DA: Defender Area
      moveEnemytoDA();
//    call showAttack
**    showAttack();
};
//*******************************
function checkRemainingEnemies(){
    
//    if there are no more enemies call win
      win();
}
//*******************************
function win(){
    
//    call reset game
      resetGame();
}
//*******************************
function resetGame(){
    
}
//*******************************
function moveEnemytoDA(){
//    delete enemy from the choose area (CA)
**    deleteEnemyfromCA();
//    create enemy in the figthing area (FA)
**    createEnemyInFA();
}

//*******************************
//- Execute the attack fn if the player click the attack button
function attack(){
//    call damageEnemy that is gonna subtract health points from the currect enemy.
      damageEnemy();
      beDamaged();    
};

//*******************************
function damageEnemy(){
//    Decrement healtPointsEnemy 
      substractHPointsE();
//    show HP at enemy's pic bottom
**    showHPointsE();
}
//*******************************
function substractHPointsE(){
//    check if HP's Enemy are zero
      ifEnemyHPzero();
}
//*******************************
function ifEnemyHPzero(){
//     call delete that enemy
**     deleteEnemy();
    
};
//*******************************
function beDameged(){
//    Decrement healtPointsPlayer 
**    substractHPointsP();
//    show HP at player's pic bottom
**    showHPointsP();     
}
