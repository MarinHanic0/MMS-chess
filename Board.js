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
        this.wKing
        this.bKing
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
        let kSideRook = new Rook(0, piecesRow, player, this)
        let qSideRook = new Rook(7, piecesRow, player, this)
        let king = new King(3, piecesRow, player, this)
        king.kSideRook = kSideRook
        king.qSideRook = qSideRook
        player === 0 ? this.wKing = king : this.bKing = king

        for (let i = 0; i < 8; i++) {
            pieces[i + ' ' + pawnsRow] = new Pawn(i, pawnsRow, player, this)
        }

        pieces[0 + ' ' + piecesRow] = kSideRook
        pieces[1 + ' ' + piecesRow] = new Knight(1, piecesRow, player, this)
        pieces[2 + ' ' + piecesRow] = new Bishop(2, piecesRow, player, this)
        pieces[3 + ' ' + piecesRow] = king
        pieces[4 + ' ' + piecesRow] = new Queen(4, piecesRow, player, this)
        pieces[5 + ' ' + piecesRow] = new Bishop(5, piecesRow, player, this)
        pieces[6 + ' ' + piecesRow] = new Knight(6, piecesRow, player, this)
        pieces[7 + ' ' + piecesRow] = qSideRook

        return pieces
    }

    isOpponnentKingSquare(square, player)
    {
        let sq
        if (player === 0) 
        {
            sq = this.bKing.square
        } else
        {
            sq = this.wKing.square
        }
        return square === sq
    }

    getAttackingSquares(player)
    {
        let pieces = player === 0 ? this.wPieces : this.bPieces
        let squares = new Set()
        
        for (const [square, piece] of Object.entries(pieces)) {
            piece.getAttackingSquares().forEach(squares.add, squares)
        }

        return Array.from(squares)
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
            return !(square in this.wPieces)
        }
        else if (player === 1) {
            return !(square in this.bPieces)
        }
    }

    makeMove(movingPiece, square) {
        movingPiece.showImage = true
        let activePieces = this.getActivePieces()
        let [x, y] = square.split(' ')
		x = int(x)
		y = int(y)

		if(movingPiece.canMoveTo(x, y, square) 
            && !this.isCausingSelfCheck(movingPiece, x, y, square, activePieces)
        ) {
            delete activePieces[movingPiece.square]
			movingPiece.setSquare(x, y, square)
            if(!this.checkPawnFigureChange(movingPiece)){
			    this.changeTurn();
            }
            this.wAttackingSquares = this.getAttackingSquares(0)
            this.bAttackingSquares = this.getAttackingSquares(1)
            this.setCheck()
		}
    }

    checkPawnFigureChange(movingPiece){
        if (movingPiece.constructor.name != "Pawn"){
            return false;
        }
        let lastRow = movingPiece.player === 0 ? 7 : 0
        if(movingPiece.y != lastRow){
            return false;
        }
        stareFigure.push(movingPiece);
        let modalZaIzborFigure = movingPiece.player === 0 ? document.getElementById("whiteModal") : document.getElementById("blackModal");
        modalZaIzborFigure.style.display = "block"	
        return true;
    }

    // TODO: Malo teze, ako ne moze nista napraviti da sprijeci sah, u matu je
    
    isCausingSelfCheck(movingPiece, x, y, square, activePieces) {
        let oldX = movingPiece.x
        let oldY = movingPiece.y
        let oldSquare = movingPiece.square
        let opponentAttackingSquares, kingSquare
        let deletedPiece

        deletedPiece = movingPiece.setSquare(x, y, square, false)
        
        if (this.turn === 0) {
            opponentAttackingSquares = this.getAttackingSquares(1)
            kingSquare = this.wKing.square
        }
        else if (this.turn === 1) {
            opponentAttackingSquares = this.getAttackingSquares(0)
            kingSquare = this.bKing.square
        }

        movingPiece.setSquare(oldX, oldY, oldSquare, false)
        if(deletedPiece){
            if(deletedPiece.player == 0){
                this.wPieces[square] = deletedPiece;
                this.wPieces[square].showImage = true;
            } else{
                this.bPieces[square] = deletedPiece;
                this.bPieces[square].showImage = true;
            }
        }
        if (opponentAttackingSquares.includes(kingSquare)) {
            return true
        }
        return false
    }

    setCheck() {
        let activeKing = this.getActiveKing()
        let activeKingSquare = activeKing.square
        let opponentAttackingSquares = this.turn === 0 ? this.bAttackingSquares : this.wAttackingSquares
        if (opponentAttackingSquares.includes(activeKingSquare)) {
            activeKing.inCheck = true
        } else {
            activeKing.inCheck = false
        }
    }

    getActivePieces() {
        if (this.turn === 0) return this.wPieces
        else if (this.turn === 1) return this.bPieces
    }

    getActiveKing() {
        if (this.turn === 0) return this.wKing
        else if (this.turn === 1) return this.bKing
    }

    getOpponentPieces(player) {
        if (player === 0) return this.bPieces
        else if (player === 1) return this.wPieces
    }

    show() {
        let boja
        stroke(0)
        strokeWeight(2)

        for (let j = 0; j < 9; j++) {
            for (let i = 0; i < 9; i++) {
                if((i + j) % 2 == 0) {
                    boja = color(255, 255, 200)
                }
                else {
                    boja = color(177, 38, 0)
                }
                fill(boja)
                rect(i * squareSize, j * squareSize, squareSize, squareSize)
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