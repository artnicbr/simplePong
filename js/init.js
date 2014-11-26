//INIT THE BALL
var ball = Crafty.e("Ball");
ball.color("#000000");
ball.x = screenWidth / 2 - ball.width / 2;
ball.y = screenHeight / 2 - ball.height / 2;

//INIT THE PLAYERS
var p1 = Crafty.e("Palette");
var p2 = Crafty.e("Palette");
p1.color("#000000");
p2.color("#000000");
p1.setPosition(10, screenHeight / 2 - p1.height / 2);
p2.setPosition(screenWidth - p2.width - 10, screenHeight / 2 - p1.height / 2);
p2.setKeys("W", "S", "A");
p2.shotDirection = -1;

//SCREEN LIMITS
var bLeft  = Crafty.e("Goal").attr({ x: -1, y: 0 });
bLeft.whoScores = p2;
var bRight = Crafty.e("Goal").attr({ x: screenWidth + 1, y: 0 });
bRight.whoScores = p1;
Crafty.e("Border").attr({ x: 0, y: -1 });
Crafty.e("Border").attr({ x: 0, y: screenHeight + 1 });