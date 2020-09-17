/// handles the array of images, displaying the current generation.

const WIDTH = 800,
    HEIGHT = 800;

const grids = 4; //n x n grid MUST BE DIVISIBLE

/* genetic algorithm settings */
let PLAYERS = grids * grids; //How many players to test at a time
let ITERATIONS = 1200; //how many frames per generation maximum
let MUTATION_RATE = 0.5;
let ELITISM = Math.round(0.1 * PLAYERS);
let START_HIDDEN_SIZE = 0;

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