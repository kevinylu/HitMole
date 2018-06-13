CLASS$(function () {
    this.__super.call(this);
    this.moles = [];
    this.score = 0;
    for(let i=0;i<9;i++){
        let box = this.getChildByName("item"+i) ;
        this.moles.push(new Mole(box.getChildByName('normal'),box.getChildByName('hit'),this,box.getChildByName('scoreImg')));
    }
    Laya.timer.loop(500,this,this.show);
},'Game',ui.GameUI);

Game.prototype.show = function () {
    this.timeBar.value-=(1/20);
    if(this.timeBar.value<=0){
        this.gameOver();
        return;
    }
    let mole = this.moles[Math.floor(Math.random()*9)];
    if(!mole.isShow&&!mole.isHit){
        mole.show();
    }
};
Game.prototype.restart = function(){
    this.timeBar.value = 1;
    this.addScore(-this.score);
    hammer.start();
    Laya.timer.loop(500,this,this.show);
}

Game.prototype.addScore = function(_score){
    this.score+=_score;
    this.score = this.score<=0?0:this.score;
    let temp_score =  this.score;
    data = {};
    for(let i=9;i>=0;i--){
        let _score =  Math.floor(temp_score%10);
        data['item'+i] = {index:_score}
        temp_score/=10;
    }
    this.scoreNums.dataSource = data;
}

Game.prototype.gameOver = function () {
    Laya.timer.clear(this,this.show);
    hammer.end();
    gameOver(this.scoreNums.dataSource );
};
