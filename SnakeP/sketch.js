/* criando variáveis */
var s;
var scl = 20;
var food;
var estado = 0;
var score = 1;
var canvas;

/* função setup, cria o fundo do jogo,
 define o objeto Snake e o frameRate utilzado */


function setup() {
  	canvas = createCanvas(600, 600);
	canvas.mouseClicked(clicou);
  	s = new Snake();
  	frameRate(10);
  	pickLocation();
}



/* função que determina a localização dos objetos
atravé da divisão do campo em linhas e colunas */
function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function clicou() {
	if (estado == 0 ) {
		if (mouseX >= width/ 2 - 50 && mouseX <= width/2 + 50 && mouseY >= height/2 - 25 && mouseY <= height/ 2 + 25) {
			estado = 1;
		}
	}
	
	else if (estado == 2) {
		if (mouseX >= width/2 - 80 && mouseX <= width/2 + 80 && mouseY >= height/2 + 35 && mouseY <= height/2 + 95) {
			location.reload();
		}
	}
}

/* função que escreve na página,
define cores e chama outras funçõees */

function draw() {
	
	if(estado == 0) {
		menu();
	
	}
	else if (estado == 1) {
		
		background(51);
  		if (s.eat(food)) {
    		pickLocation();
  		}
  		s.death();
  		s.update();
  		s.show();

  		fill(255, 0, 100);
  		rect(food.x, food.y, scl, scl);
		textSize(30);
		fill(255);
		text(score, width - 30, height - 30);
	}
		
	else {
		gameOver();
	}
	
}

/* função que lê as entradas do usuário, move a cobra através
de condições para cada tecla pressionada */

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}

function menu() {

	background(51);
	textSize(100);
	fill(255, 255, 0);
	text("Minhocão", 85, height / 2 - 150);
	fill(255, 0, 0);
	rect(width/2 - 50, height/2 - 25, 100, 50);
	textSize(40);
	fill(255, 255, 255);
	text("Play", width/2 - 37.5, height/2 + 12.5);
	
}

function gameOver() {
	
	background(66, 125, 244);
	textSize(75);
	fill(255, 255, 0);
	text("Game Over", width/2, height / 2 - 200);
	fill(255, 0, 0);
	rect(width/2 - 80, height/2 + 35, 160, 60);
	textSize(30);
	fill(255, 255, 255);
	text("Play Again", width/2, height/2 + 75);
	textSize(50);
	fill(255, 255, 255);
	text("Your Score:", width/2, height/2 - 100);
	textSize(75);
	fill(255);
	text(score, width/2, height/2);
	
}
