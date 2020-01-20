// グローバル関数
var canvas;
var img, bkimg;
var x = 100;
var y = 100;
var dx = 5;
var dy = 5;


//初期化の処理
function initial(){
	canvas = document.querySelector('#canvas');
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
	x += dx;
	y += dy;
	if(x < 0){dx *= -1;}
	if(y < 0){dy *= -1;}
	if(x + img.width > 500){dx *= -1;}
	if(y + img.height > 400){dy *= -1;}
	context.drawImage(img, x, y);

}