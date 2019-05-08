var CIRCLE_NUM = 16;
var CIRCLE_WID;
var CIRCLE_HEI;
var CIRCLE_RAD;
var R;
var G;
var B;
var RD;
var GD;
var BD;
var S;


function setup() {
  createCanvas((windowWidth),(windowHeight+15)); 
  CIRCLE_WID = width/CIRCLE_NUM;
  CIRCLE_HEI = CIRCLE_WID;
  CIRCLE_RAD = CIRCLE_WID/2;
   
   frameRate (60)
  RD = false
  R = 100
  G = 71
  B = 151
  S = 0
}

function light() {
 B = B + 20;
 G = G + 19;
 R = R + 23;
 return R, B, G;
}
 function speed() {
S = S + .04
 return S;
 }
function reset() {
 B = 160;
 G = 71;
 R = 100;
 S = 0
 return R, G, B, S;
}
function windowResized() {
  resizeCanvas(windowWidth, (windowHeight+15));
}
function draw() {
  var y = (height + CIRCLE_RAD) ;
  var shift = false;
  while (y >= 0) {
    var x;
    if (shift) {
      x = CIRCLE_RAD
    } else {
      x = 0
    }
    while (x <= (width + CIRCLE_RAD)) {
      fill(color (R,G,B));
      stroke(color((50),(50),(50)));
      ellipse (x,y,CIRCLE_WID,CIRCLE_HEI);
      x = x + CIRCLE_WID;
    }
    
    if (B <= 70) {
     BD = true
    }
    if (B >= 130) {
     BD = false
    }
    if (BD) {
      B = B + Math.floor(Math.random() * .0006)+ S + .003  
    } else { 
      B = B - (Math.floor(Math.random() * .0006)+ S + .003)
    }


        if (G <= 10) {
      GD = true
    }
    if (G >= 90) {
      GD = false
    }
    if (GD) {
      G = G + Math.floor(Math.random() * .0002 )+ S + .005  
    } else {
      G = G - (Math.floor(Math.random() * .0002)+ S + .005)
    }
        if (R <= 0) {
      RD = true
    }
    if (R >= 60) {
      RD = false
    }
    if (RD) {
      R = R + Math.floor(Math.random() * .0015)+ S + .05  
    } else {
      R = R - (Math.floor(Math.random() * .0015)+ S + .05)
    }


     y = y - CIRCLE_RAD;
    shift = !shift
  }

}
