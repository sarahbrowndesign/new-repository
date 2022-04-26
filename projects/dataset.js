
var data;

function preload(){
  
  data = loadTable("Avocado.csv","csv","header");
  
  
}

function setup() {
  createCanvas(600, 600);
  background(0);
  
var numRows = data.getRowCount();
  print(numRows);

var totvol = data.getColumn("Total Volume");
var totbag = data.getColumn("Total Bags");
  
   let minvol = min(totvol);
  let maxvol = max(totvol);

  let minbag = min(totbag);
  let maxbag = max(totbag);


  
  for(var i = 0; i<numRows; i++){
    
    var mapTotvol = map(totvol[i],minvol,maxvol,0,width);
    var mapTotbag = map(totbag[i],minbag,maxbag,height,0);
    
    
    //bounding box -178.0,10.7,-44.8,-72.5
     var mapTotVol = map(totvol[i],minvol,maxvol,0,width);
     var mapTotbag = map(totbag[i], minbag,maxbag, height, 0);
  
    
    strokeWeight(2.5);
    stroke(0,50);
    stroke(255);
    point(mapTotvol,mapTotbag);
    
    
    
    
    
  }
  
  
  
}