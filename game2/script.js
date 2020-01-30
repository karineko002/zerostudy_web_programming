var canvas = null;
var timerObj = null;
var mapObj = null;
var charObj = null;

// 初期化処理
function initial(){
	canvas = document.querySelector('#canvas');
	mapObj = new MapObject();
	charObj = new CharacterObject();
	timerObj = new TimerObject();
}

// キー操作
function move(event){
	var x = 0;
	var y = 0;
	var dr = null;
	
	switch(event.code){
		case 'ArrowLeft':
		x--;
		break;
		case 'ArrowRight':
		x++;
		break;
		case 'ArrowUp':
		y--;
		break;
		case 'ArrowDown':
		y++;
		break;
	}
	charObj.move(x,y);
}

// タイマー処理
function TimerObject(){
	
	this.runNow = function(){
		if (mapObj != null){
			mapObj.run();
		}
	}
	this.clear = function(){
		clearInterval(timer);
	}
	var timer = setInterval(this.runNow, 250);
}

// マップ管理オブジェクト
function MapObject(){
	var mapNumber = 0; // マップの番号
	var mapMax = 3; // マップの最大数
	var totalItem = 0; // アイテムの総数
	var pass = [true,true,true,false,false]; //マップの通過フラグ
	var map_w = 10; // マップの横幅
	var map_h = 10; // マップの高さ
	var show_w = 7; // 表示エリアの横幅
	var show_h = 5; // 表示エリアの高さ
	
	var imgfile = "images/sprite.png";
	var mapImages = new Image();
		mapImages.src = 'images/map.png';
		mapImages.onload = this.draw;
	var itemImages = [new Image(), new Image(), new Image()];
		itemImages[0].src = 'images/item1.png';
		itemImages[1].src = 'images/item2.png';
		itemImages[2].src = 'images/item3.png';

	var gameData = null; // データを保管する
	var me = this;
		
	// ajaxでゲームデータを得る
	this.getAjax = function(){
		var form = new FormData();
		form.append('number', mapNumber);
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'gamedata.php', true);
		xhr.responseType = 'json';
		xhr.onload = function(e) {
			if (this.status == 200) {
				gameData = this.response;
				me.countItem();
				charObj.initial();
				me.draw();
				alert('新しい世界に到着！');
			}
		};
		xhr.send(form);
	}
		
	// タイマーで定期実行する
	this.run = function(){
		this.draw();
		charObj.draw();
	}
	
	// アイテムの総数を計算
	this.countItem = function(){
		totalItem = 0;
		for(var i = 0;i < map_h;i++){
			for(var j = 0;j < map_w;j++){
				if (gameData.items[i][j] * 1 > 0){
					totalItem += 1;
				}
			}
		}
	}
	
	// 指定位置のマップデータを返す
	this.map = function(x, y){
		return gameData.map[x][y];
	}
	// 指定位置のアイテムデータを返す
	this.item = function(x, y){
		return gameData.items[x][y]
	}
	// アイテム総数を返す
	this.totalItems = function(){
		return totalItem;
	}
	
	// 指定位置のアイテムを取る
	this.getIt = function(x, y){
		var res = gameData.items[x][y];
		gameData.items[x][y] = 0;
		return res;
	}
	
	// マップサイズを返す
	this.size = function(){
		return {x:map_w, y:map_h};
	}
	// 指定した番号のマップが通過できるかチェック
	this.passing = function(n){
		return pass[n];
	}
	
	// ゲートを開く
	this.openGate = function(){
		for(var i = 0;i < map_w;i++){
			for(var j = 0;j < map_h;j++){
				if (gameData.items[i][j] * 1 == -1){
					gameData.items[i][j] = 3;
					alert('ゲートが開いた！');
					return;
				}
			}
		}
	}
	
	// マップをアップデートする
	this.mapUp = function(){
		if (mapMax == mapNumber++){
			this.gameClear();
		} else {
			this.getAjax();
		}
	}
	
	// ゲームをクリアする
	this.gameClear = function(){
		timerObj.clear();
		alert('おめでとう！');
	}

	// マップを描画する
	this.draw = function(){
		var context = canvas.getContext('2d');
		context.fillStyle = "black";
		context.fillRect(0, 0, 700, 500);
		var pos = charObj.position();
		for(var i = 0;i < show_w;i++){
			for(var j = 0;j < show_h;j++){
				var x = pos.x - 3 + i;
				var y = pos.y - 2 + j;
				if (x >= 0 && x < map_w && y >= 0 && y < map_h){
					var mapdata = gameData.map[x][y] * 1;
					var itemdata = gameData.items[x][y] * 1;
					context.drawImage(mapImages, mapdata * 100, 0, 100, 100, 
						i * 100, j * 100, 100, 100);
					if (itemdata * 1 > 0){
						context.drawImage(itemImages[itemdata - 1],i * 100, j * 100);
					}
				}
			}
		}
	}
	
	// データをロードする
	this.mapUp();
}

// キャラクタ管理オブジェクト
function CharacterObject(){
	var x = 3; // キャラクタの横位置
	var y = 2; // キャラクタの縦位置
	var items = [0, 0, 0]; // アイテム数
	var d = {c:0,e:1,w:2,s:3,n:4}; // 方向データ
	
	var sprite = new Image();
		sprite.src = 'images/sprite.png';
	var dr = d.c;
	var flg = false;
	
	// 初期化処理
	this.initial = function(){
		items = [0, 0, 0];
	}
	
	// 指定位置にキャラクタを設定
	this.set = function(px, py){
		x = px;
		y = py;
	}
	
	// 指定した数だけキャラクタを移動
	this.move = function(px, py){
		dr = d.c;
		if (px > 0){ dr = d.e; }
		if (px < 0){ dr = d.w; }
		if (py > 0){ dr = d.s; }
		if (py < 0){ dr = d.n; }

		var nx = x + px;
		var ny = y + py;
		var s = mapObj.size();
		nx = nx < 0 ? 0 : nx;
		ny = ny < 0 ? 0 : ny;
		nx = nx >= s.x ? s.x - 1 : nx;
		ny = ny >= s.y ? s.y - 1 : ny;
		
		var map =  mapObj.map(nx,ny) * 1;
		if (mapObj.passing(map)){
			this.set(nx,ny);
			this.checkItem();
		}
	}
	
	// アイテムをチェックする
	this.checkItem = function(){
		var item = mapObj.item(x,y) * 1;
		if (item == 3){
			mapObj.mapUp();
			return;
		}
		if (item > 0){
			items[item - 1]++;
			mapObj.getIt(x,y);
			var allitem = 0;
			for(var i = 0;i < items.length;i++){
				allitem += items[i];
			}
			dr = d.c;
			if (allitem == mapObj.totalItems()){
				mapObj.openGate();
			}
		}
	}
	
	// 現在位置を返す
	this.position = function(){
		return {x:x,y:y};
	}
	
	// 描画処理
	this.draw = function(){
		var context = canvas.getContext('2d');
		var dx = dr * 200 + (flg ? 100 : 0);
		context.drawImage(sprite, dx, 0, 100, 100, 300, 200, 100, 100);
		flg = !flg;
	}
}

