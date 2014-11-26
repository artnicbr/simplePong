Crafty.c("Border", {
    width: screenWidth,
    height: 1,        
    init: function () {
        this.addComponent("2D, DOM, Collision");
        this.collision();
        this.attr({ w: this.width, h: this.height });
    }
});