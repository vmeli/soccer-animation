var ball = document.getElementById('ball');
var button = document.getElementById('button');
var soccer = document.getElementById('soccer');
var soccerOffSetWidht = soccer.offsetWidth;
var spaceTotal = soccerOffSetWidht - 100;
var spaceAvance = spaceTotal / 5;
var i = 0;

button.onclick = move;


function move() {
	if(i < spaceTotal) {
		i += spaceAvance;
		ball.style.left = i + 'px';
		// ball.style.animation = 'rodar 3s  linear';
		ball.classList.add('rodar');
		console.log(i,ball.style.left);

	}else {
		console.log("hola");
	}
	
	ball.addEventListener("animationend", acaba);
}


function acaba(e) {
	 ball.classList.remove('rodar');
	 console.log("termine");
}