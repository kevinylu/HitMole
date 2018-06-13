CLASS$(function () {
        this.__super.call(this);
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
},'Hammer',ui.HammerUI);



 Hammer.prototype.start = function () {
        this.visible = true;
        Laya.Mouse.hide();
};

 Hammer.prototype.onMouseDown = function(){
    this.hit.play(0,false);
        this.pos(Laya.stage.mouseX-this.width/2,Laya.stage.mouseY-this.height/2);
}
 Hammer.prototype.onMouseMove = function(){
    this.pos(Laya.stage.mouseX-this.width/2,Laya.stage.mouseY-this.height/2);
}

Hammer.prototype.end = function(){
            this.visible = false;
            Laya.Mouse.show();

}