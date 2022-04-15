let topOffset = 0
let leftOffset = 0
let squareSize = 100
let totalBoardSizeX = leftOffset + 8 * squareSize 
let totalBoardSizeY = topOffset + 8 * squareSize 
let mouseDown = 1
let board
let startSquare, endSquare
let movingPiece

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

		if (!startSquare) return
		movingPiece = board.getMovingPiece(startSquare)
		
		if (!movingPiece) return
		board.showMovingPiece(movingPiece, mouseX, mouseY)		
	}

	if (mouseDown === 0 && !mouseIsPressed) {
		endSquare = mouseReleased()
		mouseDown = 1
		if (!endSquare || !movingPiece) return

		board.makeMove(movingPiece, endSquare)
		movingPiece = undefined
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
				const x = Math.floor((mouseX - leftOffset) / squareSize)
				const y = Math.floor((mouseY - topOffset) / squareSize)
				return x + ' ' + y
		}
	}
}
