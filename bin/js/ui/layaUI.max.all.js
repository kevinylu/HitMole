var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.timeBar=null;
		    this.scoreNums=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);

		}

		GameUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"comp/back.png","scaleY":1,"scaleX":1}},{"type":"Box","props":{"y":195,"x":161,"name":"item0"},"child":[{"type":"Image","props":{"visible":false,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"visible":false,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":-5,"skin":"comp/mask-01.png"}},{"type":"Image","props":{"y":13,"x":54,"visible":false,"skin":"comp/score_1.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":194,"x":349,"name":"item1"},"child":[{"type":"Image","props":{"visible":false,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"visible":false,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":-5,"skin":"comp/mask-02.png"}},{"type":"Image","props":{"y":13,"x":54,"visible":false,"skin":"comp/score_1.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":199,"x":545,"name":"item2"},"child":[{"type":"Image","props":{"visible":false,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"visible":false,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":-5,"skin":"comp/mask-03.png"}},{"type":"Image","props":{"y":13,"x":54,"visible":false,"skin":"comp/score_1.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":286,"x":134,"name":"item3"},"child":[{"type":"Image","props":{"visible":false,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"visible":false,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":-5,"skin":"comp/mask-04.png"}},{"type":"Image","props":{"y":13,"x":54,"visible":false,"skin":"comp/score_1.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":285,"x":349,"name":"item4"},"child":[{"type":"Image","props":{"visible":false,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"visible":false,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":-5,"skin":"comp/mask-05.png"}},{"type":"Image","props":{"y":13,"x":54,"visible":false,"skin":"comp/score_1.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":287,"x":552,"name":"item5"},"child":[{"type":"Image","props":{"visible":false,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"visible":false,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":-5,"skin":"comp/mask-06.png"}},{"type":"Image","props":{"y":13,"x":54,"visible":false,"skin":"comp/score_1.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":388,"x":132,"name":"item6"},"child":[{"type":"Image","props":{"visible":false,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"visible":false,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":-5,"skin":"comp/mask-07.png"}},{"type":"Image","props":{"y":13,"x":54,"visible":false,"skin":"comp/score_1.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":388,"x":349,"name":"item7"},"child":[{"type":"Image","props":{"visible":false,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"visible":false,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":-5,"skin":"comp/mask-08.png"}},{"type":"Image","props":{"y":13,"x":54,"visible":false,"skin":"comp/score_1.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":391,"x":571,"name":"item8"},"child":[{"type":"Image","props":{"visible":false,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":15,"visible":false,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":-5,"skin":"comp/mask-09.png"}},{"type":"Image","props":{"y":13,"x":54,"visible":false,"skin":"comp/score_1.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":8,"x":9,"var":"timeBar","value":1,"skin":"comp/progress_time.png"}},{"type":"Box","props":{"y":-5,"x":-18,"var":"scoreNums"},"child":[{"type":"Clip","props":{"y":42,"x":32,"skin":"comp/clip_number.png","name":"item0","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":50,"skin":"comp/clip_number.png","name":"item1","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":68,"skin":"comp/clip_number.png","name":"item2","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":86,"skin":"comp/clip_number.png","name":"item3","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":104,"skin":"comp/clip_number.png","name":"item4","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":122,"skin":"comp/clip_number.png","name":"item5","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":140,"skin":"comp/clip_number.png","name":"item6","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":158,"skin":"comp/clip_number.png","name":"item7","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":176,"skin":"comp/clip_number.png","name":"item8","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":194,"skin":"comp/clip_number.png","name":"item9","clipX":10,"autoPlay":false}}]}]};
		return GameUI;
	})(View);
var GameOverUI=(function(_super){
		function GameOverUI(){
			
		    this.restartBtn=null;
		    this.scoreNums=null;

			GameOverUI.__super.call(this);
		}

		CLASS$(GameOverUI,'ui.GameOverUI',_super);
		var __proto__=GameOverUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverUI.uiView);

		}

		GameOverUI.uiView={"type":"View","props":{"width":500,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"comp/overBg.png","height":400,"sizeGrid":"17,20,16,15"}},{"type":"Image","props":{"y":11,"x":16,"skin":"comp/total Score.png"}},{"type":"Button","props":{"y":266,"x":158,"var":"restartBtn","stateNum":2,"skin":"comp/btn_restart.png"}},{"type":"Box","props":{"y":131,"x":122,"var":"scoreNums"},"child":[{"type":"Clip","props":{"y":42,"x":32,"skin":"comp/clip_number.png","name":"item0","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":50,"skin":"comp/clip_number.png","name":"item1","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":68,"skin":"comp/clip_number.png","name":"item2","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":86,"skin":"comp/clip_number.png","name":"item3","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":104,"skin":"comp/clip_number.png","name":"item4","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":122,"skin":"comp/clip_number.png","name":"item5","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":140,"skin":"comp/clip_number.png","name":"item6","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":158,"skin":"comp/clip_number.png","name":"item7","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":176,"skin":"comp/clip_number.png","name":"item8","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"y":42,"x":194,"skin":"comp/clip_number.png","name":"item9","clipX":10,"autoPlay":false}}]}]};
		return GameOverUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.startBtn=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);

		}

		GameStartUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"comp/help.png"}},{"type":"Button","props":{"y":437,"x":311,"var":"startBtn","stateNum":2,"skin":"comp/btn_start.png"}}]};
		return GameStartUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;
		    this.hammer=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);

		}

		HammerUI.uiView={"type":"View","props":{"width":100,"rotation":-20,"height":100},"compId":1,"child":[{"type":"Image","props":{"y":88,"x":31,"width":98,"var":"hammer","skin":"comp/hammer.png","pivotY":50,"pivotX":56,"height":77},"compId":2}],"animations":[{"nodes":[{"target":1,"keyframes":{"rotation":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":1,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":1,"key":"rotation","index":1},{"value":20,"tweenMethod":"linearNone","tween":true,"target":1,"key":"rotation","index":5}]}},{"target":2,"keyframes":{"y":[{"value":88,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":32,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5}],"x":[{"value":31,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":81,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1},{"value":80,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
		return HammerUI;
	})(View);