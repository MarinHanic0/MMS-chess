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
        this.p0pieces = this.startPieces(0)
        this.p1pieces = this.startPieces(1)
        // this.position = this.startPosition()
        this.turn = 0
    }

    move(x1, y1, x2, y2) {
        
        this.turn = ~ this.turn
    }

    startPieces(player){
        // let pieces = []
        // let pawnRow = player == 0 ? 1 : 6 
        // let piecesRow = player == 0 ? 0 : 7 
        // for (let i = 0; i < 8; i++)
        //     pieces.push(new Pawn(pawnRow, i, player))
        // pieces.push(new Rook(piecesRow, 0, player))
        // pieces.push(new Rook(piecesRow, 7, player))
        // pieces.push(new Knight(piecesRow, 1, player))
        // pieces.push(new Knight(piecesRow, 6, player))
        // pieces.push(new Bishop(piecesRow, 2, player))
        // pieces.push(new Bishop(piecesRow, 5, player))
        // pieces.push(new Queen(piecesRow, 4, player))
        // pieces.push(new King(piecesRow, 5, player))
    }
}