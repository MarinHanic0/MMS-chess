class King extends Piece {
    constructor (x, y, player, board) {
        super(x, y, player, board)
        this.x = x
        this.y = y
        this.inCheck = false
        if(player === 0) {
            this.board.wKing = this
            this.img = loadImage('resources/KingWhite.png')
        }
        else if (player === 1) {
            this.board.bKing = this
            this.img = loadImage('resources/KingBlack.png')
        }
    }

    canMoveTo(x, y, square) {
        if(!this.isPlayableSquare(x, y)) return false
        if ((this.x === x + 1 && this.y >= y - 1 && this.y <= y + 1) || (this.x === x - 1 && this.y >= y - 1 && this.y <= y + 1) 
            || (this.x === x && (this.y === y - 1 || this.y === y + 1)) ) {
            this.checkCapture(square)
            return true
        }
    }

    getAttackingSquares() {
        let attackingSquares = []
        if (this.x + 1 < 8) attackingSquares.push((this.x + 1) + ' ' + this.y)
        if (this.x - 1 > -1) attackingSquares.push((this.x - 1) + ' ' +  this.y)
        if (this.y + 1 < 8) attackingSquares.push(this.x + ' ' + (this.y + 1))
        if (this.y - 1 > -1) attackingSquares.push(this.x + ' ' + (this.y - 1))
        if (this.x + 1 < 8 && this.y + 1 < 8) attackingSquares.push((this.x + 1) + ' ' + (this.y + 1))
        if (this.x + 1 < 8 && this.y - 1 > -1) attackingSquares.push((this.x + 1) + ' ' + (this.y - 1))
        if (this.x - 1 > -1 && this.y - 1 > -1) attackingSquares.push((this.x - 1) + ' ' + (this.y - 1))
        if (this.x - 1 > -1 && this.y + 1 < 8) attackingSquares.push((this.x - 1) + ' ' + (this.y + 1))
        return attackingSquares
    }
}