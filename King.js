class King extends Piece {
    constructor (x, y, player){
        super(x,y,player)
        this.x = x
        this.y = y
        if(player == 1) this.img = loadImage('resources/KingWhite.png')
            else this.img = loadImage('resources/KingBlack.png')
        }

    canMoveTo(x, y){
        if (this.x === x && this.y === y) 
            return false
        if (this.x + 1 === x || this.x - 1 === x || this.y + 1 === y || this.y - 1 === y)
            return true
        return false
    }

    show(x,y){
        image(this.img,x,y, 100, 100)
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