class Player{
    constructor(){
    this.index=null;
    this.name=null;
    this.distance=0;
    }
    getCount(){
        var playercountref=database.ref('playercount');
        playercountref.on("value",function(data){
            playercount=data.val();
        })
    }
    updateCount(count){
database.ref('/').update({
    playercount:count
})
    }
    update(){
        //player1 
        var playerindex = "players/player"+this.index;
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        })
    }
static getPlayerInfo(){
    var playerinforef = database.ref('players');
    playerinforef.on("value",(data)=>{
        allPlayers=data.val();
    })
}
}