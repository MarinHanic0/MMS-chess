class Rook extends Piece {

    constructor (x, y, player, board) {
        super(x, y, player, board)
        this.x = x
        this.y = y
        if(player === 0) this.img = loadImage('resources/RookWhite.png')
        else if (player === 1) this.img = loadImage('resources/RookBlack.png')
    }

    canMoveTo(x, y) {
        if (!this.isPlayableSquare(x, y)) 
            return false
        if (this.x === x || this.y === y) 
            return true
    }


    getAttackingSquares() {

    }
}