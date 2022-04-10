let WBishop1,WBishop2,WKnight1,WKnight2,WKing,WQueen,WRook1,WRook2
let WPawn1,WPawn2,WPawn3,WPawn4,WPawn5,WPawn6,WPawn7,WPawn8
let BBishop1,BBishop2,BKnight1,BKnight2,BKing,BQueen,BRook1,BRook2
let BPawn1,BPawn2,BPawn3,BPawn4,BPawn5,BPawn6,BPawn7,BPawn8

let topOffset = 0
let leftOffset = 0
let squareSize = 100
let totalBoardSizeX = leftOffset + 8 * squareSize 
let totalBoardSizeY = topOffset + 8 * squareSize 
let mouseDown = 2
let board = new Board()

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

	WRook1    = new Rook(0, 7, 1);
	WKnight1  = new Knight(1, 7, 1);
	WBishop1  = new Bishop(2, 7, 1);
	WKing     = new King(3, 7, 1);
	WQueen    = new Queen(4, 7, 1);
	WBishop2  = new Bishop(5, 7, 1);
	WKnight2  = new Knight(6, 7, 1);
	WRook2    = new Rook(7, 7, 1);

	WPawn1    = new Pawn(0, 6, 1);
	WPawn2    = new Pawn(1, 6, 1);
	WPawn3    = new Pawn(2, 6, 1);
	WPawn4    = new Pawn(3, 6, 1);
	WPawn5    = new Pawn(4, 6, 1);
	WPawn6    = new Pawn(5, 6, 1);
	WPawn7    = new Pawn(6, 6, 1);
	WPawn8    = new Pawn(7, 6, 1);

	BRook1    = new Rook(0, 0, 2);
	BKnight1  = new Knight(1, 0, 2);
	BBishop1  = new Bishop(2, 0, 2);
	BKing     = new King(3, 0, 2);
	BQueen    = new Queen(4, 0, 2);
	BBishop2  = new Bishop(5, 0, 2);
	BKnight2  = new Knight(6, 0, 2);
	BRook2    = new Rook(7, 0, 2);

	BPawn1    = new Pawn(0, 1, 2);
	BPawn2    = new Pawn(1, 1, 2);
	BPawn3    = new Pawn(2, 1, 2);
	BPawn4    = new Pawn(3, 1, 2);
	BPawn5    = new Pawn(4, 1, 2);
	BPawn6    = new Pawn(5, 1, 2);
	BPawn7    = new Pawn(6, 1, 2);
	BPawn8    = new Pawn(7, 1, 2);
}

function draw() {
	WRook1.show(0,0)
	WKnight1.show(100,0)
	WBishop1.show(200,0)
	WQueen.show(400,0)
	WKing.show(300,0)
	WBishop2.show(500,0)
	WKnight2.show(600,0)
	WRook2.show(700,0)

	WPawn1.show(0,100)
	WPawn2.show(100,100)
	WPawn3.show(200,100)
	WPawn4.show(300,100)
	WPawn5.show(400,100)
	WPawn6.show(500,100)
	WPawn7.show(600,100)
	WPawn8.show(700,100)

	BRook1.show(0,700)
	BKnight1.show(100,700)
	BBishop1.show(200,700)
	BQueen.show(400,700)
	BKing.show(300,700)
	BBishop2.show(500,700)
	BKnight2.show(600,700)
	BRook2.show(700,700)

	BPawn1.show(0,600)
	BPawn2.show(100,600)
	BPawn3.show(200,600)
	BPawn4.show(300,600)
	BPawn5.show(400,600)
	BPawn6.show(500,600)
	BPawn7.show(600,600)
	BPawn8.show(700,600)

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
