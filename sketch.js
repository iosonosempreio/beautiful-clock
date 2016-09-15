function setup() {
  createCanvas(800,600)
  angleMode(DEGREES)
}

function draw() {
  background(253,255,217)
  translate(width/2,height/2);
  
  // seconds
  clockHand(second(),60,10,270,[255,240,184])
  
  // minutes
  clockHand(minute(),60,25,180,[255,214,163])
  
  // hours
  if (hour()>12) {
    var hour12 = hour()-12
  } else {
    var hour12 = hour()
  }
  clockHand(hour12,12,50,90,[250,173,142])
  
}

function clockHand(timeValue,range,size,radius,col){
  push()
  var angle = map(timeValue,0,range,-90,270)
  noFill()
  noStroke()
  fill(col)
  if (angle != -90){
    arc(0,0,radius*2,radius*2,-90,angle,PIE)
  }
  stroke(col)
  line(0,0,radius*cos(angle),radius*sin(angle))
  rotate(angle)
  fill(col)
  stroke(0);
  noStroke();
  //ellipse(radius,0,size,size)
  fill(253,255,217)
  ellipse(0,0,radius*2-20,radius*2-20)
  pop()
  
}