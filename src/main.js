/// handles the array of images, displaying the current generation.

const WIDTH = 800,
    HEIGHT = 800;

const gridWidth = 3; //n x n grid

let p;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    colorMode(RGB, 1);
    p = new Photo(0, 0);
}

function draw() {
    background(0.9);
    p.draw();
}