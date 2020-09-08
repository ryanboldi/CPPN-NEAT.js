//handles the photo class, each of these guys will have a CPPN that represents its genetic material.

class Photo {
    constructor(x, y, genome = NaN) {
        this.x = x;
        this.y = y;
        this.sideLength = WIDTH / gridWidth;
        this.brain = genome;
    }

    draw() {
        let img = createImage(this.sideLength, this.sideLength);
        img.loadPixels();

        for (let i = 0; i < img.width; i++) {
            for (let j = 0; j < img.height; j++) {
                //get outputs from this.brain
                img.set(i, j, 0);
            }
        }

        img.updatePixels();
        image(img, this.x, this.y);
    }
}