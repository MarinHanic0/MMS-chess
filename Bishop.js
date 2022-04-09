class Bishop {
    constructor (x, y){
        this.x = x
        this.y = y
    }

    canMoveTo(x, y){
        if (this.x === x && this.y === y) 
            return false
        if (this.y - y === this.x - x || y - this.y === x - this.x ||
            y - this.y === this.x - x || y - this.y === this.x - x)
            return true
        return false
    }
}