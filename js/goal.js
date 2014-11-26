Crafty.c("Goal", {
    width: 1,
    height: screenHeight,
    whoScores: null,
    init: function () {
        this.addComponent("2D, DOM, Collision");
        this.collision();
        this.attr({ w: this.width, h: this.height });
    }
});