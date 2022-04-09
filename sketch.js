function setup() {
  size = 100

  background(255);
  createCanvas(8 * size, 8 * size);
  for (i = 0; i < 9; i++)
  {
      line(i * size, 0, i * size, 8 * size)
      line(0, i * size, 8 * size, i * size)
      stroke(0)
  }
}

function draw() {
}
