class Pawn extends Piece {
    constructor (x, y, player){
        super(x,y,player)
        this.x = x
        this.y = y
        if(player === 0) this.img = loadImage('resources/PawnWhite.png')
        else if (player === 1) this.img = loadImage('resources/PawnBlack.png')
        }

    canMoveTo(x, y){
        if (this.x === x && this.y === y) 
            return false
        if (this.y + 1 === y && (this.x === x || this.x === x - 1 || this.x === x + 1) ||
            this.y === 2 && y == 4)
            return true
        return false
    }
}