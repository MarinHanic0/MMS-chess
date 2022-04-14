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
        this.wAttackingSquares = this.attackingSquares(0)
        this.bAttackingSquares = this.attackingSquares(1)
        this.turn = 0
    }

    getMovingPiece(square) {
        // console.log(this.turn)
        if (this.turn === 0) {
            return this.wPieces[square]
        }
        else if (this.turn === 1) {
            return this.bPieces[square]
        }
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

    attackingSquares(player)
    {
        let pieces = player === 0 ? this.wPieces : this.bPieces
        let squares = new Set()
        
        for (const [square, piece] of Object.entries(pieces)) {
            squares.add(square)
            // console.log(piece)
            squares.add(piece.getAttackingSquares())
        }

        return squares
    }

    isEmptySquare(square) {
        return !(square in this.wPieces) && !(square in this.bPieces)
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