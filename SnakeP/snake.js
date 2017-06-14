function Snake() { // definição ddo objeto Snake com os seguintes atributos

  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.score = 0;
  this.tail = [];

  this.eat = function(pos) { // função para a captura de comida e crescimento do array tail

    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++; // incrementa o array quando o primeiro quadrado da cobra se choca com a comida
	  score = this.total; // score recebe o número de peças capturadas
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) { // define a direção à qual é incrementado o movimento da cobra.
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() { // define o fim do jogo pelo choque da cabeça da cobra com ela mesma ou com as paredes da tela de jogo
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0; // reinicia o array da cauda com o valor 0
        this.tail = [];
		estado = 2;
      }
    }
  }

  this.update = function() { // incrementa o tamanho da cobra
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed * scl; // define a velocidade de movimento da cobra em x
    this.y = this.y + this.yspeed * scl; // define a velocidade de movimento da cobra em y
    this.x = constrain(this.x, 0, width - scl); // contém a cobra dentro da área de jogo
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() { // define a cor de preenchimento da cobra e sua estrutura quadrados
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
	textAlign(CENTER);
	text(this.total);
  }

}
