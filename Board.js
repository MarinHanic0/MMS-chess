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
        this.turn = 0
    }

    moveImage(square, x, y) {
        if (this.turn == 0) {
            this.wPieces[square].moveImage(x, y)
        }
    }

    move(startSquare, finishSquare) {
        
        this.turn = ~ this.turn
    }

    startPieces(player){
        let pieces = {}
        let pawnsRow = player == 0 ? 1 : 6
        let piecesRow = player == 0 ? 0 : 7

        for (let i = 0; i < 8; i++) {
            pieces[i + ', ' + pawnsRow] = new Pawn(i, pawnsRow, player);
        }

        pieces[0 + ', ' + piecesRow] = new Rook(0, piecesRow, player);
        pieces[1 + ', ' + piecesRow] = new Knight(1, piecesRow, player);
        pieces[2 + ', ' + piecesRow] = new Bishop(2, piecesRow, player);
        pieces[3 + ', ' + piecesRow] = new King(3, piecesRow, player);
        pieces[4 + ', ' + piecesRow] = new Queen(4, piecesRow, player);
        pieces[5 + ', ' + piecesRow] = new Bishop(5, piecesRow, player);
        pieces[6 + ', ' + piecesRow] = new Knight(6, piecesRow, player);
        pieces[7 + ', ' + piecesRow] = new Rook(7, piecesRow, player);

        return pieces
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

        for (const [square, piece] of Object.entries(this.wPieces)) {
            piece.show()
        }

        for (const [square, piece] of Object.entries(this.bPieces)) {
            piece.show()
        }
    }
}