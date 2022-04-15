class Queen extends Piece {
    constructor (x, y, player, board) {
        super(x, y, player, board)
        this.x = x
        this.y = y
        if(player === 0) this.img = loadImage('resources/QueenWhite.png')
        else if (player === 1) this.img = loadImage('resources/QueenBlack.png')
        }

    canMoveTo(x, y, square) {
        if (!this.isPlayableSquare(x, y)) 
            return false
        if (this.getAttackingSquares().includes(square)) {
            return true
        }
    }

    getAttackingSquares() {
        let attackingSquares = []
        
        for (let i = 1; i < 8; i++) {
            let xx = this.x + i
            let sq = xx + ' ' + this.y

            if (xx > 7 || !this.board.isEmptySquare(sq)) {
                if (this.board.isAttackableSquare(sq, this.player)) attackingSquares.push(sq)
                break
            }
            attackingSquares.push(sq)
        }
        
        for (let i = 1; i < 8; i++) {
            let xx = this.x - i
            let sq = xx + ' ' + this.y

            if (xx < 0 || !this.board.isEmptySquare(sq)) {
                if (this.board.isAttackableSquare(sq, this.player)) attackingSquares.push(sq)
                break
            }
            attackingSquares.push(sq)
        }

        for (let i = 1; i < 8; i++) {
            let yy = this.y + i
            let sq = this.x + ' ' + yy

            if (yy > 7 || !this.board.isEmptySquare(sq)) {
                if (this.board.isAttackableSquare(sq, this.player)) attackingSquares.push(sq)
                break
            }
            attackingSquares.push(sq)
        }

        for (let i = 1; i < 8; i++) {
            let yy = this.y - i
            let sq = this.x + ' ' + yy

            if (yy < 0 || !this.board.isEmptySquare(sq)) {
                if (this.board.isAttackableSquare(sq, this.player)) attackingSquares.push(sq)
                break
            }
            attackingSquares.push(sq)
        }

        for (let i = 1; i < 8; i++) {
            let xx = this.x + i
            let yy = this.y + i
            let sq = xx + ' ' + yy

            if (xx > 7 || yy > 7 || !this.board.isEmptySquare(sq)) {
                if (this.board.isAttackableSquare(sq, this.player)) attackingSquares.push(sq)
                break
            }
            attackingSquares.push(sq)
        }
        
        for (let i = 1; i < 8; i++) {
            let xx = this.x - i
            let yy = this.y - i
            let sq = xx + ' ' + yy

            if (xx < 0 || yy < 0 || !this.board.isEmptySquare(sq)) {
                if (this.board.isAttackableSquare(sq, this.player)) attackingSquares.push(sq)
                break
            }
            attackingSquares.push(sq)
        }

        for (let i = 1; i < 8; i++) {
            let xx = this.x + i
            let yy = this.y - i
            let sq = xx + ' ' + yy

            if (xx > 7 || yy < 0 || !this.board.isEmptySquare(sq)) {
                if (this.board.isAttackableSquare(sq, this.player)) attackingSquares.push(sq)
                break
            }
            attackingSquares.push(sq)
        }

        for (let i = 1; i < 8; i++) {
            let xx = this.x - i
            let yy = this.y + i
            let sq = xx + ' ' + yy

            if (xx < 0 || yy > 7 || !this.board.isEmptySquare(sq)) {
                if (this.board.isAttackableSquare(sq, this.player)) attackingSquares.push(sq)
                break
            }
            attackingSquares.push(sq)
        }
        
        attackingSquares.push((this.x + 1) + ' ' + this.y)
        attackingSquares.push((this.x - 1) + ' ' +  this.y)
        attackingSquares.push(this.x + ' ' + (this.y + 1))
        attackingSquares.push(this.x + ' ' + (this.y - 1))
        attackingSquares.push((this.x + 1) + ' ' + (this.y + 1))
        attackingSquares.push((this.x + 1) + ' ' + (this.y - 1))
        attackingSquares.push((this.x - 1) + ' ' + (this.y - 1))
        attackingSquares.push((this.x - 1) + ' ' + (this.y + 1))
        return attackingSquares
    }
}