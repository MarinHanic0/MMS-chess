class Bishop extends Piece {
    constructor (x, y, player, board){
        super(x, y, player, board)
        this.x = x
        this.y = y
        if(player === 0) this.img = loadImage('resources/BishopWhite.png')
        else if (player === 1) this.img = loadImage('resources/BishopBlack.png')
        }

    canMoveTo(x, y){
        if (!this.isPlayableSquare(x, y)) 
            return false
        let square = x + ' ' + y 
        if (square in this.getAttackingSquares())
            return true
    }

    getAttackingSquares() {
        let attackingSquares = []

        for (let i = 1; i < 8; i++) {
            let xx = this.x + i
            let yy = this.y + i
            let sq = xx + ' ' + yy

            if (xx > 7 || yy > 7 || !this.board.isEmptySquare(sq)) break
            attackingSquares.push(sq)
        }
        
        for (let i = 1; i < 8; i++) {
            let xx = this.x - i
            let yy = this.y - i
            let sq = xx + ' ' + yy

            if (xx < 0 || yy < 0 || !this.board.isEmptySquare(sq)) break
            attackingSquares.push(sq)
        }

        for (let i = 1; i < 8; i++) {
            let xx = this.x + i
            let yy = this.y - i
            let sq = xx + ' ' + yy

            if (xx > 7 || yy < 0 || !this.board.isEmptySquare(sq)) break
            attackingSquares.push(sq)
        }

        for (let i = 1; i < 8; i++) {
            let xx = this.x - i
            let yy = this.y + i
            let sq = xx + ' ' + yy

            if (xx < 0 || yy > 7 || !this.board.isEmptySquare(sq)) break
            attackingSquares.push(sq)
        }

        return attackingSquares
    }
}