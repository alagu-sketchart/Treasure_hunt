var bg, bg2, form, system, code, security;
var answers = 0;

function preload() {
  bg= loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Correct answers: " + answers, 450, 50);
// add code for changing the background to the treasure background

  if(answers === 3) {
    clear()
    background(bg2)
    fill("gold")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}