class Piece {
    static squareSize
    static topOffset
    static leftOffset
    imageWidth = 100
    imageHeight = 100
    img
    
    constructor (x, y, player, board) {
        this.x = x
        this.y = y
        this.player = player
        this.board = board
        this.imageX = leftOffset + x * squareSize
        this.imageY = topOffset + y * squareSize
        this.showImage = true
        this.inPlay = true
    }

    setSquare(x, y) {
        let oldX = this.x
        let oldY = this.y
        this.x = x
        this.y = y
        this.imageX = leftOffset + x * squareSize
        this.imageY = topOffset + y * squareSize
        if (this.player === 0) {
            delete this.board.wPieces[oldX + ' ' + oldY]
            this.board.wPieces[x + ' ' + y] = this
        }
        else if (this.player === 1) {
            delete this.board.bPieces[oldX + ' ' + oldY]
            this.board.bPieces[x + ' ' + y] = this
        }
    }

    show() {
        if(this.showImage) image(this.img, this.imageX, this.imageY, this.imageWidth, this.imageHeight)
    }

    moveImage(x, y) {
        image(this.img, x - this.imageWidth / 2, y - this.imageHeight / 2, this.imageWidth, this.imageHeight)
    }

    isPlayableSquare(x, y) {
        if (this.x === x && this.y === y || !this.board.isPlayableSquare(x + ' ' + y, this.player))
            return false
        return true
    }
}