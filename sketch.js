var canvas;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    background(random(255),random(255),random(255));
   
}

function draw(){
    if (mouseIsPressed) {
        colorMode(HSB);
        noStroke();
        fill(random(360), 100,100, 0.95);
        ellipse(pmouseX,pmouseY,random(100),random(100));
    }
}

// this below will resize the canvas each time 
// the page is resized https://p5js.org/reference/#/p5/windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }