class King extends Piece {
    constructor (x, y, player, board) {
        super(x, y, player, board)
        this.x = x
        this.y = y
        if(player === 0) 
            this.img = loadImage('resources/KingWhite.png')
        else if (player === 1) 
            this.img = loadImage('resources/KingBlack.png')
    }

    canMoveTo(x, y, square) {
        if(!this.isPlayableSquare(x, y)) return false
        if (this.x + 1 === x || this.x - 1 === x || this.y + 1 === y || this.y - 1 === y) {
            this.checkCapture(square)
            return true
        }
    }

    getAttackingSquares() {
        let attackingSquares = []
        attackingSquares.push((this.x + 1) + ' ' + this.y)
        attackingSquares.push((this.x - 1) + ' ' +  this.y)
        attackingSquares.push(this.x + ' ' + (this.y + 1))
        attackingSquares.push(this.x + ' ' + (this.y - 1))
        attackingSquares.push((this.x + 1) + ' ' + (this.y + 1))
        attackingSquares.push((this.x + 1) + ' ' + (this.y - 1))
        attackingSquares.push((this.x - 1) + ' ' + (this.y - 1))
        attackingSquares.push((this.x - 1) + ' ' + (this.y + 1))
        return attackingSquares
    }
}