function draw(){
  // ▽
	var pdata1 = [
		[50,100],
		[350,100],
		[200,300]
  ];
  // △
	var pdata2 = [
		[50,250],
		[350,250],
		[200,50]
	];
	var canvas = document.querySelector('#canvas');
	var context = canvas.getContext('2d');
	context.strokeStyle = "black";
	context.beginPath();
	var p = pdata1[0];
  context.moveTo(p[0], p[1]);
  // ▽
	for (var i = 1; i < pdata1.length; i++){
		p = pdata1[i];
		context.lineTo(p[0], p[1]);
	}
	context.closePath();
	context.fillStyle = "rgba(0,255,0,0.5)";
	context.fill();
	context.stroke();
	context.beginPath();
	var p = pdata2[0];
  context.moveTo(p[0], p[1]);
  // △
	for (var i = 1; i < pdata2.length; i++){
		p = pdata2[i];
		context.lineTo(p[0], p[1]);
	}
	context.closePath();
	context.fillStyle = "rgba(0,0,255,0.5)";
	context.fill();
	context.stroke();
}
