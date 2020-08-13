class Game{
    constructor(){

    }
    getState(){
       var gamestateref = database.ref('gamestate');
       gamestateref.on("value",function(data){
           gamestate=data.val();
       })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        });
    }
   async start(){
        if(gamestate===0){
            player=new Player();
            var playercountref = await database.ref('playercount').once("value");
            if(playercountref.exists()){
               playercount=playercountref.val();
               player.getCount();
            }
            form=new Form();
            form.display();

        }
        car1 = createSprite(100,200);
        car1.addImage("car1",c1);
        car2 = createSprite(300,200);
        car2.addImage("car2",c2);
        car3 = createSprite(500,200);
        car3.addImage("car3",c3);
        car4 = createSprite(700,200);
        car4.addImage("car4",c4);
        cars=[car1,car2,car3,car4];
    }
   play(){
    form.hide();
   // textSize(30);
    //text("Game_Start",120,100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
        background("#c68767");
        image(track,0,-displayHeight*5,displayWidth,displayHeight*5);
        var index = 0;
        var x=175;
        var y;
     //var display_pos = 130;
     for(var plr in allPlayers){
         index=index+1;
         x=x+200;
         y=displayHeight-allPlayers[plr].distance;
         cars[index-1].x=x;
         cars[index-1].y=y;
         if(index===player.index){
             cars[index-1].shapeColor="red";
             camera.position.x=displayWidth/2;
             camera.position.y=cars[index-1].y;
         }
         /*if(plr==="player"+player.index){
           fill("red");
         }
         else{
             fill("black");
         }
     display_pos+=20;
     textSize(15);
     text(allPlayers[plr].name + ": "+allPlayers[plr].distance,120,display_pos);*/
    }
   }
   if(keyIsDown(UP_ARROW) && player.index !== null){
player.distance+=50
player.update();
   
   }
   if(player.distance>3860){
       gamestate=2;
   }
   drawSprites();
}
end(){
    console.log("game ended");
    game.update(2);
}
}
