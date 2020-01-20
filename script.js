// グローバル関数
var canvas;
var img, bkimg;
var x = 200;
var y = 200;

//初期化の処理
function initial(){
	canvas = document.querySelector('#canvas');
	canvas.onkeydown = draw; 
	
	img = new Image();
	img.src = "character.png";
	bkimg = new Image();
	bkimg.src = "background.png";
	bkimg.onload = function(){
		drawBackground();
	}
}

// クリックしたときの処理
function draw(event){
	drawBackground();
	drawImage(event);
}

// 背景の描画
function drawBackground(){
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, 500, 400);
	context.drawImage(bkimg, 0, 0, 500, 400);
}

// イメージの描画
function drawImage(event){
	var context = canvas.getContext('2d');
	switch(event.code){
		case 'ArrowLeft':
		x -= 10;
		break;
		case 'ArrowRight':
		x += 10;
		break;
		case 'ArrowUp':
		y -= 10;
		break;
		case 'ArrowDown':
		y += 10;
		break;
	}
	context.drawImage(img,x, y);
}