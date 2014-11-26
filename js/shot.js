Crafty.c("Shot", {
    direction: 0,
    speed: 25,
    damage: 10,
    shooter: null,
    init: function () {
        this.addComponent("2D, DOM, Color, Collision, Shot")
            .attr({w:5, h:5})
            .bind("EnterFrame", function () {                
                this.x = this.x + (this.speed * this.direction);
            })
            .collision()
            .onHit("Palette", function () {
                this.destroy();
                var palette = this.hit("Palette")[0].obj;
                palette.speed = 0;
                palette.color("#0000FF");
                
                var stopTime = 750 + Math.floor((Math.random() * 750) + 1);
                
                setTimeout(function(){
                  palette.speed = 5;
                  palette.color("#000000");
                }, stopTime);                               
            })
            .onHit("Goal", function () {
                this.destroy();
            });
    },
    setPos: function (cX, cY) {
        this.x = cX;
        this.y = cY;
    },
    setDirection: function (newDir) {
        this.direction = newDir;
    }
});