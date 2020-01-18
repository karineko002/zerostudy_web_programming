function draw(){
	var canvas = document.querySelector('#canvas');
	var context = canvas.getContext('2d');
	context.fillStyle = 'rgb(255,200,200)';
	context.fillRect(0, 0, 500, 400);
	
	var img = new Image();
	img.src = "character.png";
	img.onload =function(){
	context.drawImage(img,50,50);
}
}
