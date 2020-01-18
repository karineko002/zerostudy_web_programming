var canvas;
var img, bkimg;

//初期化の処理
function initial(){
		canvas = document.querySelector('#canvas');
		canvas.onclick =draw;
		
		img = new Image();
		img.src = "character.png";
		bkimg = new Image();
		bkimg.src = "background.png";
		bkimg.onload = function(){
			drawBackgtound();
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
	context.clearRect(0,0,500,400);
	context.drawImage(bkimg,0,0,500,400);
}

// イメージの描画
function drawImage(event){
	var context = canvas.getContext('2d');
	var x = event.clientX - canvas.offsetLeft;
	var y = event.clientY - canvas.offsetTop;
	context.drawImage(img,x - img.width / 2,y - img.height / 2);
}