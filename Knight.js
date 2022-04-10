class Knight extends Piece {
    constructor (x, y, player){
        super(x,y,player)
        this.x = x
        this.y = y
        if(player == 1) this.img = loadImage('resources/KnightWhite.png')
            else this.img = loadImage('resources/KnightBlack.png')
        }

    canMoveTo(x, y){
        if (this.x === x && this.y === y) 
            return false
        if (this.x + 1 === x && this.y + 2 == y ||
            this.x - 1 === x && this.y + 2 == y ||
            this.x + 1 === x && this.y - 2 == y ||
            this.x - 1 === x && this.y - 2 == y ||
            this.x + 2 === x && this.y + 1 == y ||
            this.x - 2 === x && this.y + 1 == y ||
            this.x + 2 === x && this.y - 1 == y ||
            this.x - 2 === x && this.y - 1 == y)
            return true
        return false
    }

    show(x,y){
        image(this.img,x,y, 100, 100)
    }
}