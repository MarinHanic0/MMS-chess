class Piece {
    static squareSize
    static topOffset
    static leftOffset
    imageWidth = 100
    imageHeight = 100
    img
    
    constructor (x, y, player){
        this.x = x
        this.y = y
        this.player = player
        this.imageX = leftOffset + x * squareSize
        this.imageY = topOffset + y * squareSize
    }

    show() {
        image(this.img, this.imageX, this.imageY, this.imageWidth, this.imageHeight)
    }

    moveImage(x, y) {
        image(this.img, x - this.imageWidth / 2, y - this.imageHeight / 2, this.imageWidth, this.imageHeight)
    }
}