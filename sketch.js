let topOffset = 0
let leftOffset = 0
let squareSize = 100
let totalBoardSizeX = leftOffset + 8 * squareSize 
let totalBoardSizeY = topOffset + 8 * squareSize 
let mouseDown = 1
let board
let startSquare, endSquare
let movingPiece
let stareFigure = [];

Piece.topOffset = topOffset
Piece.leftOffset = leftOffset
Piece.squareSize = squareSize

function setup() {
	board = new Board()

	background(0);
	createCanvas(8 * squareSize, 8 * squareSize);
}

function draw() {
	board.show()

	if (mouseIsPressed) {
		if (mouseDown === 1) startSquare = mousePressed()
		mouseDown = 0

		if (startSquare) {
			movingPiece = board.getMovingPiece(startSquare)
		}

		if (movingPiece) {
			board.showMovingPiece(movingPiece, mouseX, mouseY)		
		}
	}

	if (mouseDown === 0 && !mouseIsPressed) {
		endSquare = mouseReleased()
		mouseDown = 1
		if (endSquare && movingPiece) {
			board.makeMove(movingPiece, endSquare)
			movingPiece = undefined
		}
		else if (movingPiece){
			movingPiece.showImage = true
		}
		
	}

}

function mousePressed() {
	if (mouseDown == 1) {
		if (mouseX > leftOffset && mouseX < totalBoardSizeX && 
			mouseY > topOffset && mouseY < totalBoardSizeY) {
				const x = Math.floor((mouseX - leftOffset) / squareSize)
				const y = Math.floor((mouseY - topOffset) / squareSize)
				return x + ' ' + y
		}
	}
}

function mouseReleased() {
	if (mouseDown == 0) {
		if (mouseX > leftOffset && mouseX < totalBoardSizeX && 
			mouseY > topOffset && mouseY < totalBoardSizeY) {
				if (mouseX > totalBoardSizeX 
					|| mouseX < leftOffset
					|| mouseY > totalBoardSizeY
					|| mouseY < topOffset
					) return 
				const x = Math.floor((mouseX - leftOffset) / squareSize)
				const y = Math.floor((mouseY - topOffset) / squareSize)
				return x + ' ' + y
		}
	}
}

function chooseFigure(id){
	let pijun = stareFigure[stareFigure.length-1];
	let square = pijun.square;
	let modal = id.substring(0,1) == "w" ?  document.getElementById("whiteModal") : document.getElementById("blackModal");
	let figure = id.substring(0,1) == "w" ? board.wPieces : board.bPieces;
	let player = id.substring(0,1) == "w" ? 0 : 1;
	switch(id.substring(1)){
		case "Queen":
			figure[square] = new Queen(pijun.x, pijun.y, player, board);
			break;
		case "Rook":
			figure[square] = new Rook(pijun.x, pijun.y, player, board);
			break;
		case "Knight":
			figure[square] = new Knight(pijun.x, pijun.y, player, board);
			break;
		case "Bishop":
			figure[square] = new Bishop(pijun.x, pijun.y, player, board);
			break;
		default:
	}
	board.changeTurn();
	board.wAttackingSquares = board.getAttackingSquares(0)
	board.bAttackingSquares = board.getAttackingSquares(1)
	board.setCheck()
	stareFigure.pop();
	modal.style.display = "none";
}
