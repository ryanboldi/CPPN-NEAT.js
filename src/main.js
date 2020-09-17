/// handles the array of images, displaying the current generation.

const WIDTH = 800,
    HEIGHT = 800;

const grids = 4; //n x n grid

let p;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    colorMode(RGB, 255);
    p = new Photograph(0, 0);
}

function draw() {
    background(230);
    p.draw();
}