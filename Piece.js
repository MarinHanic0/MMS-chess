class Piece {
    static squareSize
    static topOffset
    static leftOffset
    image
    
    constructor (x, y, player){
        this.x = x
        this.y = y
        this.player = player
        this.imageX = leftOffset + x * squareSize
        this.imageY = topOffset + y * squareSize
    }

    show() {
        image(this.img, this.imageX, this.imageY, 100, 100)
    }
}