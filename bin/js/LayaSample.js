Laya.init(800, 600, laya.webgl.WebGL);
Laya.stage.scaleMode=Laya.Stage.SCALE_NOSCALE;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
Laya.stage.bgColor = "#ffcccc";
Laya.loader.load("res/atlas/comp.atlas",Laya.Handler.create(null, onLoaded),null,Laya.Loader.ATLAS);
var game;
var game_start;
var hammer;
function onLoaded() {
    if(game_start==undefined){
         game_start = new GameStart();
         game_start.startBtn.on(Laya.Event.CLICK,game_start,function(){
             
             this.removeSelf();
              startGame();
         })
    }   
             Laya.stage.addChild(game_start);

}

function startGame(){
    if(game === undefined){
        game = new Game();
        hammer = new Hammer();
        game.addChild(hammer);
    }
    Laya.stage.addChild(game);
    game.restart();
}

function gameOver(data){
    let game_over = new GameOver();
    game_over.centerX = 0 ;
    game_over.centerY = 20 ;
    game_over.scoreNums.dataSource = data;
    game_over.restartBtn.on(Laya.Event.CLICK,game_over,function(){
        this.removeSelf();
        if(game !== undefined){
                 game.removeSelf();
             }
        onLoaded();
    })
    Laya.stage.addChild(game_over);
    
}