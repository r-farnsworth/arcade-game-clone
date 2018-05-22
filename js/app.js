let moves = document.querySelector(".moves")


function addMoves(){
  moves.innerHTML++
}

let collisions = document.querySelector(".collisions")

function addCollisions(){
  collisions.innerHTML++
}

function gameReset(){
  collisions.innerHTML = 0
  moves.innerHTML = 0
}


// Enemies our player must avoid
const Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png'
  this.x = x
  this.y = y
  this.speedX = speed
  this.update()
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.

  this.x += this.speedX * Math.random();
  // the board is 505px wide, so if the enemy reaches the end of the board
  // it needs to be reset so it looks as if another is coming
  if (this.x > 505) {
    this.x = -90
    this.speedX = Math.floor(Math.random() * 3 + 2)
  }

}

// Draw the enemy on the screen
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function() {
  this.sprite = 'images/char-horn-girl.png'
  this.x = 200
  this.y = 400
}

Player.prototype.update = function(dt) {

}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

Player.prototype.handleInput = function(keyPressed) {
  if (keyPressed === 'left' && this.x > 0) {
    this.x -= 101;
    addMoves()
  }
  if (keyPressed === 'up' && this.y > 0) {
    this.y -= 83;
    addMoves()
  }
  if (keyPressed === 'right' && this.x < 350) {
    this.x += 101;
    addMoves()

  }
  if (keyPressed === 'down' && this.y < 400) {
    this.y += 83;
    addMoves()
  }


  // when player reaches water, alert user
  if (this.y < 5) {

    setTimeout(function() {
      alert("you win!")
      player.reset()
      gameReset()
    }, 250)
  }

}

Player.prototype.reset = function() {
  this.x = 200
  this.y = 400

}


// Now instantiate your objects.
const enemy1 = new Enemy(0, 50, 4)
const enemy2 = new Enemy(-150, 50, 2)
const enemy3 = new Enemy(-100, 310, 4)
const enemy4 = new Enemy(-40, 220, 2)
const enemy5 = new Enemy(100, 150, 3)


// Place all enemy objects in an array called allEnemies
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5]

// Place the player object in a variable called player
const player = new Player


// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
