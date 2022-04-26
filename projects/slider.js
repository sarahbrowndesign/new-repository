var slider;
var slider2;
var slider3;


function setup() {
  colorMode(HSB);
  let c = createCanvas(1200, 1200);
  createCanvas(1200, 1200);
  slider = createSlider(0, 255, 100);
  slider.position(0,0);
  slider.style('width', '300px')
  slider2 = createSlider(0, 255, 100);
  slider2.position(0,15);
  slider2.style('width', '300px');
  slider3 = createSlider(0, 255, 100);
  slider3.style('width', '300px');
  slider3.position(0,30);
  
}

function draw() {
  let val = slider.value();
  background(val, 100, 100, 1);
  
   let val3 = slider3.value();
 
  
  
  let val2 = slider2.value();
  
for (let lineX = 7; lineX <= 1200; lineX += 7) {
    line(0, val2, lineX, height);
}

  for (let lineY = 7; lineY <= 1200; lineY += 7) {
    line(val2, 0, lineY, height);
  }
  
   for (let lineZ = 7; lineZ <= 1200; lineZ += 7) {
    line(0, 0, lineZ, val2);
     
     
  for (let lineC = 7; lineC <= 1200; lineC += 7) {
    line(0, 100, lineC, val2);

  }
     
  }
    for (let lineA = 10; lineA <= 1200; lineA += 10) {
    line(lineA, 0, lineA, height);
  }
  
for (let i = 3; i < width; i = i + val) {
    //val was set to 3.
    stroke('red' / i, 55);
    strokeWeight(1)
    line(width, val3, i, i);

}

}
  
  
  
  
