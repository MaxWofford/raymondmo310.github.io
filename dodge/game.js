var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;
var isGameOver;

function preload() {
  playerImage = loadImage("cat.jpg");
  enemyImage = loadImage("water.jpg");

}

function setup() {
  isGameOver = false;
  createCanvas(400, 400);
  player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0);
  player.addImage(playerImage);
  enemy = createSprite(width / 2, 0, 0, 0);
  enemy.addImage(enemyImage);
  
}

function draw() {
  if (isGameOver) {
    gameOver();
  } else {
    if (enemy.overlap(player)) {
      isGameOver = true;
    }
    if (enemy.overlap(player)) {
      gameOver();
    }
    background(0, 0, 100);
    
     if (keyDown(DOWN_ARROW) && player.position.y > height-500) {
        player.position.y = player.position.y + 1;
    }
    
    if (keyDown(UP_ARROW) && player.position.y > height-500) {
        player.position.y = player.position.y - 1;
    }
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) {
      player.position.x += 2;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) {
      player.position.x -= 2;
    }
    enemy.position.y = enemy.position.y + 7;
    if (enemy.position.y > height) {
      enemy.position.y = 0;
      enemy.position.x = random(5, width - 5);
    }
    drawSprites();
  }
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width / 2, height / 2);
  text("Click anywhere to try again", width / 2, 3 * height / 4);
}

function mouseClicked() {
  isGameOver = false;
  player.position.x = width / 2;
  player.position.y = height - (playerImage.height / 2);
  enemy.position.x = width / 2;
  enemy.position.y = 0;
}