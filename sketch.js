let topOffset = 0
let leftOffset = 0
let squareSize = 100
let totalBoardSizeX = leftOffset + 8 * squareSize 
let totalBoardSizeY = topOffset + 8 * squareSize 
let mouseDown = 1
let board
let startSquare

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

		// console.log(startSquare)
		if (startSquare) {
			board.moveImage(startSquare, mouseX, mouseY)
		}
	}

	if (mouseDown === 0 && !mouseIsPressed) {
		// console.log(mouseReleased())
	}

}

function mousePressed() {
	if (mouseDown == 1) {
		if (mouseX > leftOffset && mouseX < totalBoardSizeX && 
			mouseY > topOffset && mouseY < totalBoardSizeY) {
				const x = Math.floor((mouseX - leftOffset) / squareSize)
				const y = Math.floor((mouseY - topOffset) / squareSize)
				return x + ', ' + y
		}
	}
}

function mouseReleased() {
	if (mouseDown == 0) {
		if (mouseX > leftOffset && mouseX < totalBoardSizeX && 
			mouseY > topOffset && mouseY < totalBoardSizeY) {
				const x = Math.floor((mouseX - leftOffset) / squareSize)
				const y = Math.floor((mouseY - topOffset) / squareSize)
				mouseDown = 1
				return x + ', ' + y
		}
	}
}
