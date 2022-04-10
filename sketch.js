let WBishop1,WBishop2,WKnight1,WKnight2,WKing,WQueen,WRook1,WRook2
let WPawn1,WPawn2,WPawn3,WPawn4,WPawn5,WPawn6,WPawn7,WPawn8
let BBishop1,BBishop2,BKnight1,BKnight2,BKing,BQueen,BRook1,BRook2
let BPawn1,BPawn2,BPawn3,BPawn4,BPawn5,BPawn6,BPawn7,BPawn8

function setup() {
  size = 100;

  background(0);
  createCanvas(8 * size, 8 * size);
  let boja;
  stroke(0);
  strokeWeight(2);
  for(j = 0; j < 9; j++)
    for(i = 0; i < 9; i++)
    {
        if((i+j) % 2 == 0){
          boja = color(177, 38, 0);
        }
          else{
            boja = color(255, 255, 200);
          }
        fill(boja);
        rect(i*size, j*size, size, size);
    }

  WRook1    = new Rook(0,0,1);
  WKnight1  = new Knight(150,0,1);
  WBishop1  = new Bishop(300,0,1);
  WQueen    = new Queen(450,0,1);
  WKing     = new King(600,0,1);
  WBishop2  = new Bishop(750,0,1);
  WKnight2  = new Knight(900,0,1);
  WRook2    = new Rook(1050,0,1);

  WPawn1    = new Pawn(0,150,1);
  WPawn2    = new Pawn(150,150,1);
  WPawn3    = new Pawn(300,150,1);
  WPawn4    = new Pawn(450,150,1);
  WPawn5    = new Pawn(600,150,1);
  WPawn6    = new Pawn(750,150,1);
  WPawn7    = new Pawn(900,150,1);
  WPawn8    = new Pawn(1050,150,1);

  BRook1    = new Rook(0,1050,2);
  BKnight1  = new Knight(150,1050,2);
  BBishop1  = new Bishop(300,1050,2);
  BQueen    = new Queen(450,1050,2);
  BKing     = new King(600,1050,2);
  BBishop2  = new Bishop(750,1050,2);
  BKnight2  = new Knight(900,1050,2);
  BRook2    = new Rook(1050,1050,2);

  BPawn1    = new Pawn(0,900,2);
  BPawn2    = new Pawn(150,900,2);
  BPawn3    = new Pawn(300,900,2);
  BPawn4    = new Pawn(450,900,2);
  BPawn5    = new Pawn(600,900,2);
  BPawn6    = new Pawn(750,900,2);
  BPawn7    = new Pawn(900,900,2);
  BPawn8    = new Pawn(1050,900,2);
}

function draw() {
  WRook1.show(0,0)
  WKnight1.show(100,0)
  WBishop1.show(200,0)
  WQueen.show(300,0)
  WKing.show(400,0)
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
  BQueen.show(300,700)
  BKing.show(400,700)
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
  
}
