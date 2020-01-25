function onClickBtn(){
	var val = document.querySelector('#number').value;
	
	var form = new FormData();
	form.append('number',val);
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/zerostudy_web_programming/Hello.php', true);
	xhr.onload = function(e) {
		if (this.status == 200) {
			var result = this.response;
			var msg = document.querySelector('#msg');
			msg.textContent = result;
		}
	};
	xhr.send(form);
}