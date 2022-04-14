class Rook extends Piece {

    constructor (x, y, player, board) {
        super(x, y, player, board)
        this.x = x
        this.y = y
        if(player === 0) this.img = loadImage('resources/RookWhite.png')
        else if (player === 1) this.img = loadImage('resources/RookBlack.png')
    }

    canMoveTo(x, y) {
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
            let sq = xx + ' ' + this.y

            if (xx > 7 || !this.board.isEmptySquare(sq)) break
            attackingSquares.push(sq)
        }
        
        for (let i = 1; i < 8; i++) {
            let xx = this.x - i
            let sq = xx + ' ' + this.y

            if (xx < 0 || !this.board.isEmptySquare(sq)) break
            attackingSquares.push(sq)
        }

        for (let i = 1; i < 8; i++) {
            let yy = this.y + i
            let sq = this.x + ' ' + yy

            if (yy > 7 || !this.board.isEmptySquare(sq)) break
            attackingSquares.push(sq)
        }

        for (let i = 1; i < 8; i++) {
            let yy = this.y - i
            let sq = this.x + ' ' + yy

            if (yy < 0 || !this.board.isEmptySquare(sq)) break
            attackingSquares.push(sq)
        }
        
        return attackingSquares
    }
}