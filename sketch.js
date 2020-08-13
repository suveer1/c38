var canvas;
var gamestate = 0;
var playercount;
var database;
var form,player,game;
var allPlayers;
var cars,car1,car2,car3,car4;
var c1,c2,c3,c4,c5,ground,track;

function preload(){
    c1 = loadImage("images/car1.png");
    c2 = loadImage("images/car2.png");
    c3 = loadImage("images/car3.png");
    c4 = loadImage("images/car4.png");
    ground= loadImage("images/ground.png");
    track = loadImage("images/track.png");



}
function setup(){
   
    database = firebase.database();
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
if(playercount===4){
    game.update(1);
}
if(gamestate===1){
    clear();
    game.play();
}
}



