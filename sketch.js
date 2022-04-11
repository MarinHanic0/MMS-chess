let topOffset = 0
let leftOffset = 0
let squareSize = 100
let totalBoardSizeX = leftOffset + 8 * squareSize 
let totalBoardSizeY = topOffset + 8 * squareSize 
let mouseDown = 2
let board = new Board()
let wPieces = {}
let bPieces = {}
Piece.topOffset = topOffset
Piece.leftOffset = leftOffset
Piece.squareSize = squareSize

function setup() {

	background(0);
	createCanvas(8 * squareSize, 8 * squareSize);
	let boja;
	stroke(0);
	strokeWeight(2);

	for (let j = 0; j < 9; j++) {
		for (let i = 0; i < 9; i++) {
			if((i+j) % 2 == 0) {
				boja = color(255, 255, 200);
			}
			else {
				boja = color(177, 38, 0);
			}
			fill(boja);
			rect(i*squareSize, j*squareSize, squareSize, squareSize);
		}
	}

	wPieces['0, 0'] = new Rook(0, 0, 1);
	wPieces['1, 0'] = new Knight(1, 0, 1);
	wPieces['2, 0'] = new Bishop(2, 0, 1);
	wPieces['3, 0'] = new King(3, 0, 1);
	wPieces['4, 0'] = new Queen(4, 0, 1);
	wPieces['5, 0'] = new Bishop(5, 0, 1);
	wPieces['6, 0'] = new Knight(6, 0, 1);
	wPieces['7, 0'] = new Rook(7, 0, 1);

	wPieces['0, 1'] = new Pawn(0, 1, 1);
	wPieces['1, 1'] = new Pawn(1, 1, 1);
	wPieces['2, 1'] = new Pawn(2, 1, 1);
	wPieces['3, 1'] = new Pawn(3, 1, 1);
	wPieces['4, 1'] = new Pawn(4, 1, 1);
	wPieces['5, 1'] = new Pawn(5, 1, 1);
	wPieces['6, 1'] = new Pawn(6, 1, 1);
	wPieces['7, 1'] = new Pawn(7, 1, 1);

	bPieces['0, 7']= new Rook(0, 7, 2);
	bPieces['1, 7']= new Knight(1, 7, 2);
	bPieces['2, 7']= new Bishop(2, 7, 2);
	bPieces['3, 7']= new King(3, 7, 2);
	bPieces['4, 7']= new Queen(4, 7, 2);
	bPieces['5, 7']= new Bishop(5, 7, 2);
	bPieces['6, 7']= new Knight(6, 7, 2);
	bPieces['7, 7']= new Rook(7, 7, 2);

	bPieces['0, 6'] = new Pawn(0, 6, 2);
	bPieces['1, 6'] = new Pawn(1, 6, 2);
	bPieces['2, 6'] = new Pawn(2, 6, 2);
	bPieces['3, 6'] = new Pawn(3, 6, 2);
	bPieces['4, 6'] = new Pawn(4, 6, 2);
	bPieces['5, 6'] = new Pawn(5, 6, 2);
	bPieces['6, 6'] = new Pawn(6, 6, 2);
	bPieces['7, 6'] = new Pawn(7, 6, 2);
}

function draw() {
	for (const [square, piece] of Object.entries(wPieces)) {
		piece.show()
	}

	for (const [square, piece] of Object.entries(bPieces)) {
		piece.show()
	}

	if (mouseIsPressed) {
		mouseDown = 1
		console.log(mousePressed())
	}

	if (mouseDown == 0 && !mouseIsPressed) {
		console.log(mouseReleased())
	}
}

function mousePressed() {
	let x, y
	if (mouseDown == 1) {
		if (mouseX > leftOffset && mouseX < totalBoardSizeX && 
			mouseY > topOffset && mouseY < totalBoardSizeY) {
				x = Math.floor((mouseX - leftOffset) / squareSize)
				y = Math.floor((mouseY - topOffset) / squareSize)
				mouseDown = 0
				return [x, y]
		}
	}
}

function mouseReleased() {
	let x, y
	if (mouseDown == 0) {
		if (mouseX > leftOffset && mouseX < totalBoardSizeX && 
			mouseY > topOffset && mouseY < totalBoardSizeY) {
				x = Math.floor((mouseX - leftOffset) / squareSize)
				y = Math.floor((mouseY - topOffset) / squareSize)
				mouseDown = 1
				console.log("aaa")
				return [x, y]
		}
	}
}
