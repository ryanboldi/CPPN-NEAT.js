/// handles the array of images, displaying the current generation.

const WIDTH = 800,
    HEIGHT = 800;

const grids = 3; //n x n grid

let p;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    colorMode(RGB, 255);
    p = new Photo(0, 0);
}

function draw() {

    p.draw();
}