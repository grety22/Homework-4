// for (var i = 0; i<character.length; i++){
// 	alert(character[i].name);
// 	currentPlayer = character[i];
// 	alert(currentPlayer.characterImgPath);
// }


//*** SELECT CHARACTER
$("#i3").click(function(){
//      disable click event in the CHOOSE CHARACTER AREA
        $("#i0").unbind("click"); 
        $("#i0").css('cursor', 'none'); 
        $("#i0").css('opacity', '0.4'); 
        $("#spanShow").fadeIn(2000);
        $("#spanShowName").text(character[3].name);
//      show the character attributes values
        $("#hp").text(character[3].hp);
        $("#cap").text(character[3].cap);
        $("#ap").text(character[3].ap);
//      select character area
        $("#i3").fadeOut();
        $("#i1").fadeOut();
        $("#i2").fadeOut();
        $("#i0").removeClass("i0");
        $("#i0").addClass("i3");
        $("#attack").fadeIn(4000);
//      choose enemy area
        $("#i31").hide();
        $("#i21").removeClass("animated");
        $("#i21").show();
        $("#i11").removeClass("animated");
        $("#i11").show();
        $("#i01").removeClass("animated");
        $("#i01").show();
//      fighting area
        $("#i012").removeClass("i0");
        $("#i012").addClass("i3");
        $("#i012").show();
        $("#i212").hide();
        $("#i112").hide();
        $("#i312").hide();
    
       
    
});

$("#i2").click(function(){
//      disable click event in the CHOOSE CHARACTER AREA
        $("#i0").unbind("click"); 
        $("#i0").css('cursor', 'none'); 
        $("#i0").css('opacity', '0.4'); 
        $("#spanShow").fadeIn(2000);
        $("#spanShowName").text(character[2].name); 
//      show the character attributes values
        $("#hp").text(character[2].hp);
        $("#cap").text(character[2].cap);
        $("#ap").text(character[2].ap);
//      select character area
        $("#i2").fadeOut();
        $("#i1").fadeOut();
        $("#i3").fadeOut();
        $("#i0").removeClass("i0");
        $("#i0").addClass("i2");
        $("#attack").fadeIn(4000);
//      choose enemy area
        $("#i31").hide();
        $("#i21").removeClass("animated");
        $("#i21").show();
        $("#i11").removeClass("animated");
        $("#i11").show();
        $("#i01").removeClass("animated");
        $("#i01").show();
        $("#i21").removeClass("i2");
        $("#i21").addClass("i3");
//    fighting area
        $("#i012").removeClass("i0");
        $("#i012").addClass("i2");
        $("#i012").show();
        $("#i212").hide();
        $("#i112").hide();
        $("#i312").hide();
    
});

$("#i1").click(function(){
//      disable click event in the CHOOSE CHARACTER AREA
        $("#i0").unbind("click"); 
        $("#i0").css('cursor', 'none'); 
        $("#i0").css('opacity', '0.4'); 
        $("#spanShow").fadeIn(2000);
        $("#spanShowName").text(character[1].name);
//      show the character attributes values
        $("#hp").text(character[1].hp);
        $("#cap").text(character[1].cap);
        $("#ap").text(character[1].ap);
//      select character area
        $("#i2").fadeOut();
        $("#i1").fadeOut();
        $("#i3").fadeOut();
        $("#i0").removeClass("i0");
        $("#i0").addClass("i1");
        $("#attack").fadeIn(4000);
//      choose enemy area
        $("#i31").hide();
        $("#i21").removeClass("animated");
        $("#i21").show();
        $("#i11").removeClass("animated");
        $("#i11").show();
        $("#i01").removeClass("animated");
        $("#i01").show();
        $("#i11").removeClass("i1");
        $("#i11").addClass("i3");
//      fighting area
        $("#i012").removeClass("i0");
        $("#i012").addClass("i1");
        $("#i012").show();
        $("#i212").hide();
        $("#i112").hide();
        $("#i312").hide();
        //    CHOOSE ENEMY
      
        $("#i11").click(function(){
//       disable click event in the CHOOSE CHARACTER AREA
        $("#i01").unbind("click"); 
        $("#i01").css('cursor', 'none'); 
        $("#i01").css('opacity', '0.4'); 
            
        $("#i11").unbind("click");
        $("#i11").css('cursor', 'none'); 
        $("#i11").css('opacity', '0.4');
            
        $("#i21").unbind("click");
        $("#i21").css('cursor', 'none'); 
        $("#i21").css('opacity', '0.4'); 
            
        $("#spanShow2").fadeIn(2000);
        $("#spanShowName2").text(character[1].name);    
    
//    fighting area
//        $("#i212").removeClass("i1");
//        $("#i212").addClass("i1");
        $("#i212").show();
});

$("#i0").click(function(){
//      disable click event in the CHOOSE CHARACTER AREA
        $("#i0").unbind("click"); 
        $("#i0").css('cursor', 'none'); 
        $("#i0").css('opacity', '0.4'); 
        $("#spanShow").fadeIn(2000);
        $("#spanShowName").text(character[0].name);
//      show the character attributes values
        $("#hp").text(character[0].hp);
        $("#cap").text(character[0].cap);
        $("#ap").text(character[0].ap);
//      select character area
        $("#i2").fadeOut();
        $("#i1").fadeOut();
        $("#i3").fadeOut();
        $("#attack").fadeIn(4000);
//      choose enemy area
        $("#i31").hide();
        $("#i21").removeClass("animated");
        $("#i21").show();
        $("#i11").removeClass("animated");
        $("#i11").show();
        $("#i01").removeClass("animated");
        $("#i01").show();
        $("#i01").removeClass("i0");
        $("#i01").addClass("i3");
//      fighting area
        $("#i012").show();
        $("#i212").hide();
        $("#i112").hide();
        $("#i312").hide();
        
//    CHOOSE ENEMY
      
        $("#i01").click(function(){
//       disable click event in the CHOOSE CHARACTER AREA
        $("#i01").unbind("click"); 
        $("#i01").css('cursor', 'none'); 
        $("#i01").css('opacity', '0.4'); 
            
        $("#i11").unbind("click");
        $("#i11").css('cursor', 'none'); 
        $("#i11").css('opacity', '0.4');
            
        $("#i21").unbind("click");
        $("#i21").css('cursor', 'none'); 
        $("#i21").css('opacity', '0.4'); 
            
        $("#spanShow2").fadeIn(2000);
        $("#spanShowName2").text(character[3].name);    
    
//    fighting area
        $("#i212").removeClass("i1");
        $("#i212").addClass("i3");
        $("#i212").show();
});



    
    
    
    
    
    
    
    
    
    
    
    
    
});    
});
});











