class Rook extends Piece {

    constructor (x, y, player){
        super(x,y,player)
        this.x = x
        this.y = y
        if(player == 1) this.img = loadImage('resources/RookWhite.png')
            else this.img = loadImage('resources/RookBlack.png')
    }

    canMoveTo(x, y){
        if (this.x === x && this.y === y)
            return false
        if (this.x === x || this.y === y) 
            return true
        return false
    }
}