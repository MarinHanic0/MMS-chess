class King extends Piece {
    constructor (x, y, player){
        super(x, y, player)
    }

    canMoveTo(x, y){
        if (this.x === x && this.y === y) 
            return false
        if (this.x + 1 === x || this.x - 1 === x || this.y + 1 === y || this.y - 1 === y)
            return true
        return false
    }

    // setAttackingSquares(){
    //    return [
    //        (this.x, this.y - 1),
    //        (this.x, this.y + 1),
    //        (this.x + 1, this.y),
    //        (this.x - 1, this.y),
    //        (this.x - 1, this.y - 1),
    //        (this.x + 1, this.y - 1),
    //        (this.x - 1, this.y + 1),
    //        (this.x + 1, this.y + 1)
    //     ]
    // }
}