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

    setSquare(x, y, oldSq) {
        this.x = x
        this.y = y
        this.imageX = leftOffset + x * squareSize
        this.imageY = topOffset + y * squareSize
        let sq = x + ' ' + y

        if (this.player === 0) {
            delete this.board.wPieces[oldSq]
            this.board.wPieces[sq] = this
            if (this instanceof King) this.board.wKing = sq
        }
        else if (this.player === 1) {
            delete this.board.bPieces[oldSq]
            this.board.bPieces[sq] = this
            if (this instanceof King) this.board.bKing = sq
        }
        this.checkCapture(oldSq)
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

    checkCapture() {
        let pieces
        let sq = this.x + ' ' + this.y
        if (this.board.turn === 0) pieces = this.board.bPieces
        else if (this.board.turn === 1) pieces = this.board.wPieces
        if (sq in pieces) {
            pieces[sq].showImage = false
            delete pieces[sq]
        }
    }
}