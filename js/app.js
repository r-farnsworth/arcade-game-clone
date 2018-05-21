// Enemies our player must avoid
const Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0
    this.y = 150
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


const Player = function() {
  this.sprite = 'images/char-boy.png'
  this.x = 300
  this.y = 400
}

Player.prototype.update = function(dt){

}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(keyPressed) {
  if (keyPressed === 'left') {
    console.log('key pressed')
  } else if (keyPressed === 'right') {
    console.log('key pressed')
  } else if (keyPressed === 'up') {
    console.log('key pressed')
  } else if (keyPressed === 'down') {
    console.log('key pressed')
  }
  else {
    return false
  }
}
// Now instantiate your objects.

const enemy1 = new Enemy
const enemy2 = new Enemy(0, 0)
// Place all enemy objects in an array called allEnemies
const allEnemies = [enemy1, enemy2]
// Place the player object in a variable called player

const player = new Player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
