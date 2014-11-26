Crafty.c("Palette", {
    width: 15,
    height: 90,
    speed: 5,
    keyUP: "UP_ARROW",
    keyDOWN: "DOWN_ARROW",
    keyFIRE: "RIGHT_ARROW",
    shotDirection: 1,
    firing: false,
    score: 0,
    init: function () {
        this.addComponent('2D, DOM, Color, Collision, Pallete, Keyboard');
        this.attr({ w: this.width, h: this.height })
            .bind("EnterFrame", function () {
                if (this.isDown(this.keyUP)) {
                    if (this.y - this.speed > 0)
                        this.y = this.y - this.speed;
                    else
                        this.y = 0;
                }

                if (this.isDown(this.keyDOWN)) {
                    if (this.y + this.speed < screenHeight - this.height)
                        this.y = this.y + this.speed;
                    else
                        this.y = screenHeight - this.height;
                }

                if (this.isDown(this.keyFIRE)) {
                    if (this.firing == false) {
                        var shot = Crafty.e("Shot");
                        shot.color("#000000");

                        if (this.shotDirection == 1)
                            shot.setPos(this.x + this.width + 1, this.y + (this.height / 2) - 1);
                        else
                            shot.setPos(this.x - 3, this.y + (this.height / 2) - 1);

                        shot.direction = this.shotDirection;
                        shot.speed = 3;
                        shot.shooter = this;
                        this.firing = true;
                        var that = this;
                        setTimeout(function(){
                          that.firing = false;                          
                        }, 1500);
                    }
                }
            })
            .collision();
    },

    setKeys: function (keyUP, keyDOWN, keyFIRE) {
        this.keyUP = keyUP;
        this.keyDOWN = keyDOWN;
        this.keyFIRE = keyFIRE;
    },

    setPosition: function (cX, cY) {
        this.x = cX;
        this.y = cY;
    }
});