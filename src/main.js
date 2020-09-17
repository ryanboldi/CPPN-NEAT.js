/// handles the array of images, displaying the current generation.

const WIDTH = 400,
    HEIGHT = 400;

const grids = 2; //n x n grid MUST BE DIVISIBLE
const sideLength = WIDTH / grids;

let photos = [];

/* genetic algorithm settings */
let PLAYERS = grids * grids; //How many players to test at a time
let ITERATIONS = 1200; //how many frames per generation maximum
let MUTATION_RATE = 0.9;
let ELITISM = Math.round(0.1 * PLAYERS);
let START_HIDDEN_SIZE = 4;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    colorMode(RGB, 1);

    initNeat();
    startEvaluation();
}

function drawPhotos() {
    background(230);
    for (let i = 0; i < photos.length; i++) {
        photos[i].draw();
    }
}