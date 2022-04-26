var track;
var control;
var amp;


function preload() {
  track = loadSound('hers.mp3');
}


function setup() {
  createCanvas(400, 400);
  track.play();
  control = createButton('Play/Pause');
  control.mousePressed(toggleTrack);
  amp = new p5.Amplitude();
  
  
}

function draw() {
  background('#fae');
  let vol = amp.getLevel();
  let size = map(vol,0,1,0,400);
  let op = map(vol,0,1,50,255);
  fill(0,0,255,op);
  noStroke();
  // big shape
  square(size, size, 200);
  //random ellipses
  if(vol > 0.3) {
    fill(random(255), random(255), random(255), op);
    ellipse(random(width), random(height), random(100), random(100));
    
  
  
  }
}
function toggleTrack() {
  if(track.isPlaying()) {
    track.pause();
  } else {
    track.play();
  }
  

  
  
  
}


