class Rook extends Piece {
    constructor (x, y, player){
        super(x, y, player)
    }

    canMoveTo(x, y){
        if (this.x === x && this.y === y)
            return false
        if (this.x === x || this.y === y) 
            return true
        return false
    }
}