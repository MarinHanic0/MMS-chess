class Queen extends Piece {
    constructor (x, y, player){
        super(x,y,player)
        this.x = x
        this.y = y
        if(player == 1) this.img = loadImage('resources/QueenWhite.png')
            else this.img = loadImage('resources/QueenBlack.png')
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

    show(x,y){
        image(this.img,x,y, 100, 100)
    }
}