function draw(){
	var pdata = [
		[50,100],
		[100,300],
		[250,-100],
		[300,100]
	];
	var canvas = document.querySelector('#canvas');
	var context = canvas.getContext('2d');
	context.fillStyle = "#FF9999";
	context.strokeStyle = "blue";
	context.beginPath();
	context.moveTo(pdata[0][0], pdata[0][1]);
	context.bezierCurveTo(
		pdata[1][0],pdata[1][1],pdata[2][0],
		pdata[2][1],pdata[3][0],pdata[3][1]);
	context.stroke();

}
