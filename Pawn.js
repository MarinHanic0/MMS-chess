class Pawn extends Piece {
    constructor (x, y, player){
        super(x,y,player)
        this.x = x
        this.y = y
        if(player == 1) this.img = loadImage('resources/PawnWhite.png')
            else this.img = loadImage('resources/PawnBlack.png')
        }

    canMoveTo(x, y){
        if (this.x === x && this.y === y) 
            return false
        return false
    }

    show(x,y){
        image(this.img,x,y, 100, 100)
    }
}