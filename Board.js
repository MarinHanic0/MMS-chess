// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7 C B C B ...
//   0 1 2 3 4 5 6 7

class Board {
    constructor() {
        this.wPieces = this.startPieces(0)
        this.bPieces = this.startPieces(1)
        this.wAttackingSquares = this.getAttackingSquares(0)
        this.bAttackingSquares = this.getAttackingSquares(1)
        this.turn = 0
    }

    getMovingPiece(square) {
        if (this.turn === 0) {
            return this.wPieces[square]
        }
        else if (this.turn === 1) {
            return this.bPieces[square]
        }
    }

    showMovingPiece(movingPiece, mouseX, mouseY) {
		movingPiece.showImage = false
		movingPiece.moveImage(mouseX, mouseY)
    }

    changeTurn() {
        this.turn = (this.turn + 1) % 2
    }

    startPieces(player){
        let pieces = {}
        let pawnsRow = player === 0 ? 1 : 6
        let piecesRow = player === 0 ? 0 : 7

        for (let i = 0; i < 8; i++) {
            pieces[i + ' ' + pawnsRow] = new Pawn(i, pawnsRow, player, this);
        }

        pieces[0 + ' ' + piecesRow] = new Rook(0, piecesRow, player, this);
        pieces[1 + ' ' + piecesRow] = new Knight(1, piecesRow, player, this);
        pieces[2 + ' ' + piecesRow] = new Bishop(2, piecesRow, player, this);
        pieces[3 + ' ' + piecesRow] = new King(3, piecesRow, player, this);
        pieces[4 + ' ' + piecesRow] = new Queen(4, piecesRow, player, this);
        pieces[5 + ' ' + piecesRow] = new Bishop(5, piecesRow, player, this);
        pieces[6 + ' ' + piecesRow] = new Knight(6, piecesRow, player, this);
        pieces[7 + ' ' + piecesRow] = new Rook(7, piecesRow, player, this);

        return pieces
    }

    getAttackingSquares(player)
    {
        let pieces = player === 0 ? this.wPieces : this.bPieces
        let squares = new Set()
        
        for (const [square, piece] of Object.entries(pieces)) {
            squares.add(square)
            squares.add(piece.getAttackingSquares())
        }

        return squares
    }

    isEmptySquare(square) {
        return !(square in this.wPieces) && !(square in this.bPieces)
    }

    isAttackableSquare(square, player) {
        if (player === 0) return !(square in this.wPieces)
        if (player === 1) return !(square in this.bPieces)
    }

    isPlayableSquare(square, player) {
        if (player === 0) {
            // console.log('a')
            // console.log(square in this.wPieces)
            // console.log(!(square in this.wPieces))
            return !(square in this.wPieces) // || !(this.bPieces[square] instanceof King)
        }
        else if (player === 1) {
            return !(square in this.bPieces) // || !(this.wPieces[square] instanceof King)
        }
    }

    makeMove(movingPiece, square) {
        movingPiece.showImage = true
		let oldSquare = movingPiece.x + ' ' + movingPiece.y
        let [x, y] = square.split(' ')
		x = int(x)
		y = int(y)

		if(movingPiece.canMoveTo(x, y, square)) { 
			let pieces = this.getActivePieces()
            delete pieces[oldSquare]
            this.wAttackingSquares = this.getAttackingSquares(0)
            this.bAttackingSquares = this.getAttackingSquares(1)
			movingPiece.setSquare(x, y, square)
			this.changeTurn()
		}
    }
    

    getActivePieces() {
        if (this.turn === 0) return this.wPieces
        else if (this.turn === 1) return this.bPieces
    }

    getOpponentPieces(player) {
        if (player === 0) return this.bPieces
        else if (player === 1) return this.wPieces
    }

    show() {
        let boja;
        stroke(0);
        strokeWeight(2);

        for (let j = 0; j < 9; j++) {
            for (let i = 0; i < 9; i++) {
                if((i + j) % 2 == 0) {
                    boja = color(255, 255, 200);
                }
                else {
                    boja = color(177, 38, 0);
                }
                fill(boja);
                rect(i * squareSize, j * squareSize, squareSize, squareSize);
            }
        }

        for (const [_, piece] of Object.entries(this.wPieces)) {
            piece.show()
        }

        for (const [_, piece] of Object.entries(this.bPieces)) {
            piece.show()
        }
    }
}