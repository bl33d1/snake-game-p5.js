let s;
let scl = 20;
let food;

let score = document.getElementById('score');

function setup(){
	createCanvas(500,500);
	s = new Snake();
	frameRate(10);
	pickLocation();
	score.innerHTML = 'Score: 0'
}

function pickLocation(){
	let cols = floor(width/scl);
	let rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)))
	food.mult(scl);
}

function draw(){
	background(51);
	s.death();
	s.update();
	s.show();
	
	

	if(s.eat(food))
		pickLocation();

	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);

}


let lastKey;
function keyPressed() {
	if(keyCode === UP_ARROW && lastKey !== 'da'){
			s.dir(0, -1);
			lastKey = 'ua';
	}else if (keyCode === DOWN_ARROW && lastKey !== 'ua'){
		s.dir(0, 1);
		lastKey = 'da'
	}else if (keyCode === RIGHT_ARROW && lastKey !== 'la'){
		s.dir(1, 0);
		lastKey = 'ra'
	}else if (keyCode === LEFT_ARROW && lastKey !== 'ra'){
		s.dir(-1, 0);
		lastKey = 'la'
	}
}

