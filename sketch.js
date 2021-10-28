  var fundo;
  var fundoimg;
  var maca;
  var maçaimg;
  var folha;
  var folhaimg;
  var coelho;
  var toelho;
function preload(){
  fundoimg =loadImage("garden.png");

  maçaimg =loadImage("apple.png");

  folhaimg = loadImage("orangeLeaf.png");

  toelho = loadImage("rabbit.png")
}

function setup(){
  createCanvas(400,400);
  
  fundo = createSprite(200,200,10,10);
  fundo.addImage("jardim" , fundoimg);

  coelho = createSprite(200,325,10,10);
  coelho.addImage("coelho" , toelho);
  coelho.scale = 0.08
}

function draw() {
  background(0);
  
  if (keyDown("RIGHT")) {
  coelho.x=coelho.x+3
  }
  
  if (keyDown("LEFT")) {
    coelho.x=coelho.x-3
  }

  if (frameCount % 70 === 0) {
  gerarMaça();
  
  }

  if (frameCount % 50 === 0) {
   outono();
  }
   drawSprites();

}
function gerarMaça() {
 maca = createSprite(200,-10,10,10);
 maca.addImage("maça" , maçaimg);
 maca.scale = 0.05;
 maca.x = Math.round(random(10,370));
 maca.velocityY = 3
}

function outono() {
  folha = createSprite(200,-10,10,10);
  folha.addImage("folha" , folhaimg);
  folha.scale = 0.05;
  folha.x = Math.round(random(10,370));
  folha.velocityY = 2
 
 }  




