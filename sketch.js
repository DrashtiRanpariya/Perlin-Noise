var inc = 0.1;
var scl = 10;
var rows,cols ;
var fr;
var zoff=0;
var particles = [];
var flowfield;

function setup(){
  background(255);
  createCanvas(windowWidth, windowHeight);
  cols = floor(width/scl);
  rows = floor(height/scl);
  fr = createP('');

  flowfield = new Array(cols*rows);

  for(var i=0; i < 500 ; i++){
  particles[i] =new Particle();
  }
}


 
function draw(){
 
var yoff = 0;
for(var y = 0 ; y < rows; y++){
  var xoff = 0;
  for (var x= 0; x < cols ; x++){
    var index = x + y * cols;
    var angle= noise(xoff, yoff,zoff)*TWO_PI*4;
    var v = p5.Vector.fromAngle(angle);
    v.setMag(1);
    flowfield[index] = v ;
     xoff += inc ;
    }
    yoff += inc ;
  }
  for (var i = 0; i < particles.length ; i++){
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
 
  
}
  fr.html(floor(frameRate()));
}