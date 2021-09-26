var board = [];
var pwhite = [], pblack = [];
var elephantB, elephantW, elephatb1, elephantW1;
var knightb1, knightb2, knightw1, knightw2;
var bishopb1,bishopb2,bishopw1,bishopw2;
var bking,wking,bqueen,wqueen;
var wqueenim

function preload(){
  wqueenim=loadImage("im2/QUEEN.png")
}

function setup() {
  createCanvas(400, 400);
  createBoard()
  for (let i = 0; i < 8; i++) {
    pwhite.push(createSprite(i * 50 + 25, 50 + 25, 25, 25));
    pblack.push(createSprite(i * 50 + 25, 300 + 25, 25, 25))
    pblack[i].shapeColor = "black"
  }

  elephantB = createSprite(25, 375, 25, 25);
  elephantb1 = createSprite(375, 375, 25, 25);
  elephantW = createSprite(375, 25, 25, 25);
  elephantW1 = createSprite(25, 25, 25, 25);

  knightb1 = createSprite(75, 375, 25, 25);
  knightb2 = createSprite(325, 375, 25, 25);
  knightw1 = createSprite(75, 25, 25, 25);
  knightw2 = createSprite(325, 25, 25, 25);

  bishopb1 = createSprite(125,375,25,25);
  bishopb2 = createSprite(275,375,25,25);
  bishopw1 = createSprite(125,25,25,25);
  bishopw2 = createSprite(275,25,25,25);

  bking=createSprite(175,375,25,25);
  wking=createSprite(175,25,25,25);

  bqueen=createSprite(225,375,25,25);
  wqueen=createSprite(225,25,25,25);
  wqueen.addImage("oueen",wqueenim);
  wqueen.scale=0.2

}

function draw() {
  background(255, 255, 255);
  drawSprites();
}