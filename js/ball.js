Crafty.c("Ball", {
    width: 10,
    height: 10,
    speed: 0,
    max_speed: 7,
    acceleration: 1,
    angle: 0, //in degrees
    init: function () {
        this.addComponent('2D, DOM, Color, Collision, Keyboard, Ball');
        this.attr({ w: this.width, h: this.height })
            .bind("EnterFrame", function () {
                if (this.isDown("SPACE")) {
                    this.start();
                }

                speed_x = this.speed * Math.cos(this.angle * Math.PI / 180);
                speed_y = this.speed * Math.sin(this.angle * Math.PI / 180);
                this.x = this.x + speed_x;
                this.y = this.y + speed_y;
            })
            .collision()
            .onHit("Pallete", function () {
                speed_x = this.speed * Math.cos(this.angle * Math.PI / 180);
                var hits = this.hit("Pallete");                
                this.x = (speed_x < 0) ? this.x + hits[0].overlap * -1 : this.x + hits[0].overlap;
                newSpeed = (this.speed + this.acceleration <= this.max_speed) ? this.speed + this.acceleration : this.max_speed;
                this.speed = 0;

                //moves to the left
                if (speed_x < 0) {
                    //so it goes to the right
                    var newAngle = ((Math.random() * 1000) % 60) + 1;
                    if (newAngle < 30)
                        newAngle = 360 - ((Math.PI / 2) - newAngle)
                }
                //moves to the right
                else {
                    var newAngle = 60 + (((Math.random() * 1000) % 60) + 1);
                    newAngle = (Math.PI / 2) + newAngle;
                }
                console.log(newAngle);
                this.angle = newAngle;
                this.speed = newSpeed;
            })
            .onHit("Border", function () {                

                if (this.angle > 0 && this.angle < 90)
                    this.angle = 360 - this.angle;

                else if (this.angle > 90 && this.angle < 180)
                    this.angle = 270 - (this.angle - 90);

                else if (this.angle > 180 && this.angle < 270)
                    this.angle = 90 + (270 - this.angle);

                else if (this.angle > 270)
                    this.angle = 360 - this.angle;
                
            })
            .onHit("Goal", function () {                
                this.hit("Goal")[0].obj.whoScores.score += 1;
                document.getElementById("scoreScreen").innerHTML = "P1 "+p1.score+" x "+p2.score+" P2";
                this.reset();                
            });
    },
    start: function () {
        if (this.speed == 0) {
            this.speed = 2;
            this.angle = parseInt(((Math.random() * 10000) % 360)) + 1;

            while (this.angle == 90 || this.angle == 270)
                this.angle = parseInt(((Math.random() * 10000) % 360)) + 1;
        }
    },
    reset: function () {
        this.speed = 0;
        this.angle = 0;
        this.x = screenWidth / 2 - this.width / 2;
        this.y = screenHeight / 2 - this.height / 2;
    }
});