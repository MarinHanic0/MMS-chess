class Bishop extends Piece {
    constructor (x, y, player, board){
        super(x, y, player, board)
        this.x = x
        this.y = y
        if(player === 0) this.img = loadImage('resources/BishopWhite.png')
        else if (player === 1) this.img = loadImage('resources/BishopBlack.png')
        }

    canMoveTo(x, y){
        if (!this.isPlayableSquare(x, y)) 
            return false
        if (this.y - y === this.x - x || y - this.y === x - this.x ||
            y - this.y === this.x - x || y - this.y === this.x - x)
            return true
    }

    getAttackingSquares() {

    }
}