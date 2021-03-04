//variables
var hr,mn,sc;
var end,end2,end3;

function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {

//background
background(0);

//timings[EXTRA]
fill("white");
text("12",190,90);
text("1",250,105);
text("2",300,150);
text("3",310,205);
text("4",295,265);
text("5",250,310);
text("6",195,320);
text("7",135,305);
text("8",100,260);
text("9",85,205);
text("10",90,150);
text("11",127,103);

translate(200,200)
rotate (-90);

   hr = hour();
   mn = minute();
   sc = second();
  
  strokeWeight(8);
  stroke("red");
  noFill();
  end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("green");
  end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("blue");
  end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(end);
  stroke("red");
  line(0,0,100,0);
  pop();
  
  push();
  rotate(end2);
  stroke("green");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("blue");
  line(0,0,50,0);
  pop();
  
  //clock point[EXTRA]
  stroke("Black");
  point (0,0);

  }
