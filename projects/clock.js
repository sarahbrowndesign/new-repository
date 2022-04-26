function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    
  }
  
  
  function draw() {
    background('#fae');
    
  
    stroke(51);
    rect(50, 50, 320, 320);
  
   
    let hr = hour();
    let mn = minute();
    let sc = second();
  
    
  
    strokeWeight(8);
    noFill();
    translate(200, 200);
    rotate(-90);
    
    stroke(150, 255, 100);
    let end1 = map(sc, 0, 60, 0, 360);
  
    
    stroke(0, 0, 255);
    let end2 = map(mn, 0, 60, 0, 360);
   
    
    stroke(255, 100, 150);
    let end3 = map(hr % 12, 0, 12, 0, 360);
    
  
    push();
    strokeWeight(8);
    rotate(end3);
    stroke(1);
    line(0, 0, 75, 0);
    pop();
  
    push();
    strokeWeight(8);
    rotate(end2);
    stroke(1);
    line(0, 0, 120, 0);
    pop();
  
    push();
    strokeWeight(2);
    rotate(end1);
    stroke(1);
    line(0, 0, 120, 0);
    pop();
    
  
    
  }
  
  