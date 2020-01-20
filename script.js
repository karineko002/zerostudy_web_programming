// グローバル関数
var canvas;
var img, bkimg;
var x = 0;
var timer;

//初期化の処理
function initial(){
	canvas = document.querySelector('#canvas');
	// canvas.onkeydown = draw; 
	
	img = new Image();
	img.src = "character.png";
	bkimg = new Image();
	bkimg.src = "background.png";
	bkimg.onload = function(){
	timer = setInterval(draw, 50);
	}
}

// クリックしたときの処理
function draw(){
	drawBackground();
	drawImage();
}

// 背景の描画
function drawBackground(){
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, 500, 400);
	context.drawImage(bkimg, 0, 0, 500, 400);
}

// イメージの描画
function drawImage(){
	var context = canvas.getContext('2d');
	x += 5;
	context.drawImage(img, x, 100);
	if (x > 400){ clearInterval(timer); }
}