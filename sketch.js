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
    let canvas = createCanvas(400, 400);
    canvas.parent('p5-canvas');

    noiseSlider = createSlider(0,25,5,0);
    noiseSlider.position(60, 10);
    noiseSlider.style('width', '80px');

    interpolationSlider = createSlider(0,1,0.1,0);
    interpolationSlider.position(300, 10);
    interpolationSlider.style('width', '80px');

    c1 = { x: 50, y: 150, w: 50, h: 50, setColor: () => { fill(255, 0, 0, 150); } };
    c2 = { x: 50, y: 250, w: 50, h: 50, setColor: () => { fill(255, 255, 0, 150); } };
}
  
function draw() {
    background(150);

    noise = noiseSlider.value();
    interpolationPercent = interpolationSlider.value();

    if(mouseIsPressed){
        c2.x = mouseX + random(-noise, noise);
    }

    c1.x = linearInterpolation(c1.x, c2.x, interpolationPercent);

    line(0, 200, 400, 200);

    c1.setColor()
    drwC(c1);
    c2.setColor();
    drwC(c2);

    textSize(14);
    fill(255);
    text('Noise', 10, 18);
    text('Interpolation', 200, 18);
    textSize(8);
    text(noise.toFixed(2), 150, 16);
    text(interpolationPercent.toFixed(2), 380, 16);
}

function linearInterpolation(v1, v2, percent) {
    return v1 + (v2 - v1) * percent;
}