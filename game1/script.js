//グローバル関数
var gameFlag = false;   //ゲームの実行中を示す変数
var score = 0;          //スコア
var timerObj = null;    //タイマーオブジェクト
var gameObj = null;     //ゲームオブジェクト

var bgImage = null;     //背景イメージ
var hitImage = null;    //効果イメージ
var itemImages = null;  //アイテムイメージ配列 

// 〇初期化処理
function initial(){
   // 初期化処理
   bgImage = new Image();
   bgImage.src = 'images/background.png';
   bgImage.onload = function(){
     drawBackground();
   }
   hitImage = new Image();
   hitImage.src = 'images/hit.png';
   
   itemImages = [new Image(), new Image(), new Image()];
   itemImages[0].src ='images/item1.png';
   itemImages[1].src ='images/item2.png';
   itemImages[2].src ='images/item3.png';
}

// 〇スタート
function start(){
  // ゲーム開始の処理
  if (gameFlag == false){
    score = 0;
    gameFlag = true;
    gameObj = new GameObject();
    timerObj = new TimerObject();
  }
}

// 〇マウスイベントの処理
function move(event){
  // マウスイベントの処理
  if(gameFlag){
    gameObj.move(event);
  }
}

// 〇背景描画
function drawBackground(){
  var context = canvas.getContext('2d');
  // 描画の処理
  context.drawImage(bgImage,0,0);
  if (gameFlag == false){
    context.font = "50pt Georgia";
    context.fillStyle = 'red';
    context.fillText("Collect It!",250, 200);
    context.font = "30pt Georgia";
    context.fillText("click to start", 300, 400);
  }
}

// ☆タイマー処理のオブジェクト
function TimerObject(){ 
  var counter = 0;       //呼び出し回数の変数
  var level = 50;       //レベルを示す変数 

    // タイマーで実行される処理
    this.runNow = function(){
      counter += 1;
      if (counter > level){
        counter = 0;
        if (level > 2){
          level--;
        }
        gameObj.addItem();
      }
      gameObj.run();
    }
    //停止処理
    this.stop = function(){
      clearInterval(timer);
      gameFlag = false;
    }
    // タイマースタート
    var timer = setInterval(this.runNow,50);
}

// ☆ゲーム管理オブジェクト
function GameObject(){
  var missCount = 0;    //ミスした回数
  var me = this;        //オブジェクト自身
  var canvas = document.querySelector('#canvas'); 
  var myChar = new CharacterObject();  //キャラクタ・オブジェクト
  var items = [];       //アイテムを保管する配列
  var mouseX = 0;       //現在のマウスの横位置
  var mouseY = 0;       //現在のマウスの縦位置
  
  // アイテムを追加する
  this.addItem = function(){
    var n = Math.floor( Math.random() * 3);
    items.push(new GameItem(itemImages[n]));
  }

  //マウス
  this.move = function(e){
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
  }
  // スコア表示
  this.drawScore = function(){
    var context = canvas.getContext('2d');
    context.font = "48px Georgia";
    context.fillStyle = 'red';
    context.fillText(score,20,50);
  }
  // タイマー処理
  this.run = function(){
    myChar.move(mouseX, mouseY);
    this.checkHit();
    if (missCount >= 10){
      timerObj.stop();
    }
    drawBackground();
    for (var n in items){
      if(items[n].draw(canvas) == false){
        if(items[n].isHit() == false){
          missCount++;
        }
        items.splice(n,1);
      }
    }
    myChar.draw(canvas);
    this.drawScore();
  }
  // ヒットチェック
  this.checkHit = function(){
    var point = myChar.point();
    for(var n in items){
      var point2 = items[n].point();
      var dx = Math.abs(Math.abs(point[0]) - Math.abs(point2[0]));
      var dy = Math.abs(Math.abs(point[1]) - Math.abs(point2[1]));
      var d = Math.sqrt(dx * dx + dy * dy);
      if(d < 75){
        items[n].hit();
      }
    }
  }
}
  
// ☆キャラクタ管理オブジェクト
function CharacterObject(){
  var x = 350;
  var y = 250;
  var image = new Image();
    image.src = 'images/character.png';
  
  // 動かす
  this.move = function(mx,my){
    if(mx > x + 50){ x += 5; }
    if(mx < x + 50){ x -= 5; }
    if(my > y + 50){ y += 5; }
    if(my < y + 50){ y -= 5; }
  }
  // 描画
  this.draw = function(canvas){
    var context = canvas.getContext('2d');
    context.drawImage(image, x, y);
  }
  // 位置を返す
  this.point = function(){
    return [x, y];
  }
}
// ☆アイテム・オブジェクト
function GameItem(img){
  var hitFlag = false;    //ヒットしたかどうかを示す
  var image = img;        //表示イメージ
  var lastCount = Math.floor(Math.random() * 100) + 50;   //最大カウント数
  var count = 0;          //カウント数
  var x = Math.floor(Math.random() * 700);  //横位置
  var y = Math.floor(Math.random() * 500);  //縦位置
  // 描画する
  this.draw = function(canvas){
    count++;
    var context = canvas.getContext('2d');
    context.globalAlpha = count / lastCount;
    context.drawImage(image, x, y);
    context.globalAlpha = 1.0;
    return count < lastCount;
  }
  
  // 位置を返す
  this.point = function(){
    if(hitFlag){
      return [-1000, -1000];
    }else{
      return[x,y];
    }
  }
  
  // ヒット処理
  this.hit = function(){
    score+= (lastCount - count) * 10 + 100;
    image = hitImage;
    hitFlag = true;
    setTimeout(this.clear,200);
  }

  // ヒットしたかを調べる
  this.isHit = function(){
    return hitFlag;
  }

  // 消去する
  this.clear = function(){
    count = lastCount;
  }
}  