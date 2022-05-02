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
        this.square = x + ' ' + y
        this.hasMoved = false
    }

    setSquare(x, y, newSquare, setImage = true) {
        let oldX = this.x
        let oldY = this.y
        this.x = x
        this.y = y

        if (setImage) {
            if (this instanceof King && !this.hasMoved) {
                if (this.square === this.kSideCastleSquare && !this.kSideRook.hasMoved) {
                    this.kSideRook.setSquare(2, y, 2 + ' ' + y)
                }
                else if (this.square === this.qSideCastleSquare && !this.qSideRook.hasMoved) {
                    this.qSideRook.setSquare(4, y, 4 + ' ' + y)
                }
            }
            this.imageX = leftOffset + x * squareSize
            this.imageY = topOffset + y * squareSize
            this.hasMoved = true
        }
        
        if (this.player === 0) {
            delete this.board.wPieces[this.square]
            this.board.wPieces[newSquare] = this
            if (this instanceof King) this.board.wKing = this.square
        }
        else if (this.player === 1) {
            delete this.board.bPieces[this.square]
            this.board.bPieces[newSquare] = this
            if (this instanceof King) this.board.bKing = this.square
        }

        this.square = newSquare
        this.checkCapture()
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
        if (this.board.turn === 0) pieces = this.board.bPieces
        else if (this.board.turn === 1) pieces = this.board.wPieces
        if (this.square in pieces) {
            pieces[this.square].showImage = false
            delete pieces[this.square]
        }
    }
}