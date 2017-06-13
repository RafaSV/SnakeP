var estado = 0;

function setup() {
	canvas = createCanvas(600, 600);
	
}

function draw() {
	
	if (estado === 0) {
		menu();
	}
	else {
		background(255, 50, 0);
	}
}

function menu() {

	background(51);
	textSize(100);
	fill(255, 255, 0);
	text("Minhocão", 100, height / 2 - 150);
	fill(255, 0, 0);
	ellipse(width / 2, height / 2, 100, 100);
	textSize(40);
	fill(255, 255, 255);
	text("Play", width/2 - 37.5, height/2 + 12.5);
	
}