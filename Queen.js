class Queen extends Piece {
    constructor (x, y, player){
        super(x, y, player)
    }

    canMoveTo(x, y){
        if (this.x === x && this.y === y)
            return false
        if (this.x === x || this.y === y || 
            this.y - y === this.x - x || y - this.y === x - this.x ||
            y - this.y === this.x - x || y - this.y === this.x - x)
            return true
        return false
    }
}