function Mole(normalState,hitState,game,scoreImg) {
    this.normalState = normalState;
    this.hitState = hitState;
    this.game = game;
    this.scoreImg = scoreImg;
    this.type = Math.random()<0.3?1:2;
    this.normalState.skin = 'comp/mouse_normal_'+this.type+'.png';
    this.hitState.skin = 'comp/mouse_hit_'+this.type+'.png';
    this.scoreImg.skin = 'comp/score_'+this.type+'.png';
    this.upY = this.normalState.y;
    this.isHit = false;
    this.downY = this.upY+25;
    this.normalState.on(Laya.Event.CLICK,this,this.hit)
}
Mole.prototype.show=function () {

    this.normalState.y = this.downY;
    this.normalState.visible = true;
    this.isShow = true;
    
    
    Laya.Tween.to(this.normalState,{y:this.upY},400,Laya.Ease.backOut,Laya.Handler.create(this,this.showComplete))
};
Mole.prototype.showComplete = function() {

    if(!this.isHit){
        Laya.timer.once(400,this,this.hide)
    }
};

Mole.prototype.hide = function() {
    Laya.Tween.to(this.normalState,{y:this.downY},200,Laya.Ease.backIn,Laya.Handler.create(this,this.init))
};
Mole.prototype.init = function() {
    this.scoreImg.visible = false;

    this.normalState.visible = false;
    this.hitState.visible = false;
    
    this.isShow = false;
    this.isHit = false;
};


Mole.prototype.hit = function() {
    Laya.timer.clear(this,this.hide)
    this.isHit = true;


    this.scoreImg.y+=30;
    this.scoreImg.scale(0,0);
    this.scoreImg.visible = true;

    Laya.Tween.to(this.scoreImg,{y:this.scoreImg.y-30,scaleX:1,scaleY:1},300,Laya.Ease.backOut);

    this.normalState.visible = false;
    this.hitState.visible = true;
    this.game.addScore((this.type==1)?-100:100);
    Laya.timer.once(1000,this,this.init)

};
