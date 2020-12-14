let c1;
let c2;
let noiseSlider;
let noise = 0;
let interpolationPercent = 1;
let interpolationSlider;

function drwC(circ) {
    ellipse(circ.x, circ.y, circ.w, circ.h);  
}

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent('p5-canvas');

    noiseSlider = createSlider(0,25,5,0);
    noiseSlider.position(110, 23.5);
    noiseSlider.style('width', '120px');

    interpolationSlider = createSlider(0,1,0.1,0);
    interpolationSlider.position(580, 23.5);
    interpolationSlider.style('width', '160px');

    c1 = { x: 100, y: 300, w: 100, h: 100, setColor: () => { fill(255, 0, 0, 150); } };
    c2 = { x: 100, y: 500, w: 100, h: 100, setColor: () => { fill(255, 255, 0, 150); } };
}
  
function draw() {
    background(150);

    noise = noiseSlider.value();
    interpolationPercent = interpolationSlider.value();

    if(mouseIsPressed){
        c2.x = mouseX + random(-noise, noise);
    }

    c1.x = linearInterpolation(c1.x, c2.x, interpolationPercent);

    line(0, 400, 800, 400);

    c1.setColor()
    drwC(c1);
    c2.setColor();
    drwC(c2);

    textSize(28);
    fill(255);
    text('Noise', 10, 35);
    text('Interpolation', 380, 35);
    textSize(20);
    text(noise.toFixed(2), 250, 34);
    text(interpolationPercent.toFixed(2), 750, 34);
}

function linearInterpolation(v1, v2, percent) {
    return v1 + (v2 - v1) * percent;
}