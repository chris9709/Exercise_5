  var LLscale = 0.4, RLscale = 0.4, LAscale = 0.4, RAscale = 0.4, Bscale = 0.4, Hscale = 0.4;
  var A = 500, B = 200;

function setup(){
createCanvas(800,800);
background(255);   //white background

}

function draw(){
  background(255);
  //the first MonsterA, You can change the scale of each part
  //use 1-6 to control head, body, leftleg, rightleg, leftarm, rightarm
  //it may be dismantled
  //remember to press another key to stop!!!!!
  //press 0 to reset
  if(key == 0){
    background(255);
    LLscale = 0.4, RLscale = 0.4, LAscale = 0.4, RAscale = 0.4, Bscale = 0.4, Hscale = 0.4;
  }
  
  frameRate(0.1);
  if(key == 1){
    Hscale = Hscale + 0.01;
  }
  if(key == 2){
    Bscale = Bscale + 0.01;
  }
  if(key == 3){
    LLscale = LLscale + 0.01;
  }
  if(key == 4){
    RLscale = RLscale + 0.01;
  }
  if(key == 5){
    LAscale = LAscale + 0.01;
  }
  if(key == 6){
    RAscale = RAscale + 0.01;
  }
    monsterA(300, 300, LLscale, RLscale, LAscale, RAscale, Bscale, Hscale);
    
  //the second MonsterA, it will move randomly
  
    
    monsterA(A, B, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5);
     A += random(-10, 10);
     B += random(-10, 10);
  
      
  //the first MonsterB, You can move it with your mouse
    frameRate(30);
    var speedX;
    var speedY;
    speedX = (800 - mouseX) / 3;
    speedY = (800 - mouseY) / 3;
    var startX = 400;
    var startY = 400;
    monsterB(startX -= speedX, startY -= speedY , 1);
  
  //the second MonsterB, You can rotate it with your mouse pressed
  push();
  if(mouseIsPressed){
  var angel = map(mouseX, 0, width, - PI / 8, PI / 8);
  rotate(angel);
  }
  monsterB(300, 300, 0.5);
  pop();
}



//THE WHOLE FUNCTION 
function monsterA(X, Y, LLscale, RLscale, LAscale, RAscale, Bscale, Hscale){
  var Green = color(0, 255, 0);
  var Pink = color(255, 25, 128);
  var Red = color(255, 0, 0);
  var Blue = color(0, 0, 255);
  var Orange = color(255, 167, 24);
  leftarm(X - 90 * LAscale, Y + 10 * LAscale, LAscale, Pink);
  rightarm(X + 75 * RAscale, Y + 10 * RAscale, RAscale, Pink);
  leftleg(X - 65 * LLscale, Y + 40 * LLscale, LLscale, Green);
  rightleg(X + 35 * RLscale, Y + 40 * RLscale, RLscale, Green);
  body(X, Y, Bscale, Red);
  head(X - 25 * Hscale, Y - 150 * Hscale, Hscale, Orange, Blue);
  
}







//Leftleg
function leftleg(LLstartX, LLstartY, LLscale, LLcolor){
  stroke(0);
  strokeWeight(3);
  fill(LLcolor);
  rect(LLstartX - 25 * LLscale, LLstartY, 50 * LLscale, 150 * LLscale);
  //feet
  fill(162, 98, 255);
  ellipse( LLstartX + 5 * LLscale, LLstartY + 150 * LLscale, 70 * LLscale, 30 * LLscale);
  //toe
  line(LLstartX + 15 * LLscale, LLstartY + 140 * LLscale, LLstartX + 25 * LLscale, LLstartY + 139 * LLscale);
  line(LLstartX + 20 * LLscale, LLstartY + 145 * LLscale, LLstartX + 35 * LLscale, LLstartY + 144 * LLscale);
  line(LLstartX + 25 * LLscale, LLstartY + 151 * LLscale, LLstartX + 35 * LLscale, LLstartY + 149 * LLscale);
  }
  
//Rightleg
function rightleg(RLstartX, RLstartY, RLscale, RLcolor){
  stroke(0);
  strokeWeight(3);
  fill(RLcolor);
  rect(RLstartX - 25 * RLscale , RLstartY, 50 * RLscale, 150 * RLscale);
  //feet
  fill(162, 98, 255);
  ellipse( RLstartX + 5 * RLscale, RLstartY + 150 * RLscale, 70 * RLscale, 30 * RLscale);
  //toe
  line(RLstartX + 15 * RLscale, RLstartY + 140 * RLscale, RLstartX + 25 * RLscale, RLstartY + 139 * RLscale);
  line(RLstartX + 20 * RLscale, RLstartY + 145 * RLscale, RLstartX + 35 * RLscale, RLstartY + 144 * RLscale);
  line(RLstartX + 25 * RLscale, RLstartY + 151 * RLscale, RLstartX + 35 * RLscale, RLstartY + 149 * RLscale);
  }

//Leftarm
function leftarm(LAbodyX, LAbodyY, LAscale, LAcolor){
  stroke(0);
  strokeWeight(3);
  fill(LAcolor);
  quad(LAbodyX, LAbodyY, LAbodyX - 135 * LAscale, LAbodyY, LAbodyX - 110 * LAscale, LAbodyY - 35 * LAscale, LAbodyX - 25 * LAscale, LAbodyY - 35 * LAscale);
  //fingers
  fill(255);
  triangle( LAbodyX - 190 * LAscale, LAbodyY - 50 * LAscale, LAbodyX - 170 * LAscale, LAbodyY - 55 * LAscale, LAbodyX - 170 * LAscale, LAbodyY - 35 * LAscale);
  triangle( LAbodyX - 190 * LAscale, LAbodyY - 25 * LAscale, LAbodyX - 170 * LAscale, LAbodyY - 35 * LAscale, LAbodyX - 165 * LAscale, LAbodyY - 15 * LAscale);
  triangle( LAbodyX - 180 * LAscale, LAbodyY + 5 * LAscale, LAbodyX - 165 * LAscale, LAbodyY - 15 * LAscale, LAbodyX - 145 * LAscale, LAbodyY - 5 * LAscale);
  //hand
  fill(255, 241, 48);
  arc( LAbodyX - 135 * LAscale, LAbodyY - 35 * LAscale, 75 * LAscale, 75 * LAscale, 0, PI+QUARTER_PI, CHORD);
}
//Rightarm
function rightarm(RAbodyX, RAbodyY, RAscale, RAcolor){
  stroke(0);
  strokeWeight(3);
  fill(RAcolor);
  quad(RAbodyX, RAbodyY, RAbodyX + 135 * RAscale, RAbodyY, RAbodyX + 110 * RAscale, RAbodyY - 35 * RAscale, RAbodyX + 25 * RAscale, RAbodyY - 35 * RAscale);
  //fingers
  fill(255);
  triangle(RAbodyX + 95 * RAscale, RAbodyY - 55 * RAscale, RAbodyX + 125 * RAscale, RAbodyY - 70 * RAscale, RAbodyX + 115 * RAscale, RAbodyY - 35 * RAscale);
  triangle(RAbodyX + 115 * RAscale, RAbodyY - 45 * RAscale, RAbodyX + 145 * RAscale, RAbodyY - 65 * RAscale, RAbodyX + 135 * RAscale, RAbodyY - 25 * RAscale);
  triangle(RAbodyX + 135 * RAscale, RAbodyY - 35 * RAscale, RAbodyX + 165 * RAscale, RAbodyY - 61 * RAscale, RAbodyX + 150 * RAscale, RAbodyY - 15 * RAscale);
  //hand
  fill(255, 241, 48);
  arc(RAbodyX + 125 * RAscale, RAbodyY - 35 * RAscale, 75 * RAscale, 75 * RAscale, 0, PI+QUARTER_PI, CHORD);
}
//Body
function body(centerX, centerY, Bscale, Bcolor){
  stroke(0);
  strokeWeight(3);
  fill(Bcolor);
  quad(centerX - 100 * Bscale, centerY - 100 * Bscale, centerX + 50 * Bscale, centerY - 100 * Bscale, centerX + 100 * Bscale, centerY + 50 * Bscale, centerX - 100 * Bscale, centerY + 100 * Bscale);
}
//Head Horn Teeth Eye Tongue
function head(headX, headY, Hscale, Headcolor, Horncolor){
  //horn
  stroke(0);
  strokeWeight(3);
  fill(Horncolor);
  triangle(headX - 105 * Hscale, headY, headX - 125 * Hscale, headY - 75 * Hscale, headX - 25 * Hscale, headY);
  triangle(headX - 50 * Hscale, headY - 75 * Hscale, headX - 50 * Hscale, headY - 130 * Hscale, headX - 5 * Hscale, headY - 75 * Hscale);
  //teeth
  var x;
  for(x = 0; x < 10; x ++){
    strokeWeight(3);
    stroke(0);
    fill(255);
    triangle(headX - 5 * Hscale + 10 * x * Hscale, headY + 25 * Hscale, headX - 5 * Hscale + 10 * (x+1) * Hscale, headY - 15 * Hscale, headX - 5 * Hscale + 10 * (x+2) * Hscale, headY + 25 * Hscale);
    triangle(headX - 5 * Hscale, headY - 95 * Hscale + 10 * x * Hscale, headX + 15 * Hscale, headY - 90 * Hscale + 10 * x * Hscale, headX - 5 * Hscale, headY - 80 * Hscale + 10 * x * Hscale);
  }
  //tongue
  fill(255, 102, 93);
  quad(headX - 25 * Hscale, headY, headX + 125 * Hscale, headY - 70 * Hscale, headX + 115 * Hscale, headY - 60 * Hscale, headX - 25 * Hscale, headY + 10 * Hscale);
  //head
  fill(Headcolor);
  arc(headX, headY, 225 * Hscale, 200 * Hscale, 0, PI+HALF_PI, PIE);
  //eye
  fill(255);
  ellipse(headX - 20 * Hscale, headY - 50 * Hscale, 30 * Hscale, 20 * Hscale);
  //pupil
  fill(0);
  ellipse(headX - 20 * Hscale, headY - 50 * Hscale, 9 * Hscale, 9 * Hscale);
  }

function monsterB(X, Y, MonsterScale){
  push();
  translate(X, Y);
  scale(MonsterScale);
  strokeWeight(1);
  stroke(0);
  fill(178, 174, 147);
  triangle(190, 75, 225, 95, 195, 123);// right ear
  triangle(310, 75, 275, 95, 305, 123);// left ear
  ellipse(250, 150, 120, 120);// head
  arc(250, 270, 160, 200, -1.05, 4.2, OPEN);// body
  
  noStroke();
  fill(250, 248, 237);
  ellipse(250, 270, 80, 100);//belly
  
  strokeWeight(5);
  stroke(245, 35, 220);
  line(238, 258, 262, 282);
  line(262, 258, 238, 282);// a monster should have its weekness
  
  noStroke();
  triangle(220, 135, 280, 135, 250, 145);
  ellipse(235, 160, 40, 40);
  ellipse(265, 160, 40, 40);//face
  
  strokeWeight(1);
  stroke(0);
  line(233, 155, 180, 135);
  line(233, 157, 175, 150);
  line(233, 160, 180, 165); 
  line(267, 155, 320, 135);
  line(267, 157, 325, 150);
  line(267, 160, 320, 165);// beard
  
  noStroke();
  fill(80);
  triangle(250, 170, 230, 180, 270, 180);//mouth..maybe
  
  strokeWeight(8);
  stroke(50);
  point(224,140);
  point(276,140);// eye
  
  strokeWeight(1);
  stroke(0);
  fill(178, 174, 147);
  quad(308, 201, 366, 251, 362, 268, 325, 235);
  ellipse(370, 261, 20, 20);// left hand
  
  fill(255, 0, 0);
  ellipse(180, 220, 40, 40);
  noFill();
  arc(178, 195, 30, 30, 1, 2);
  arc(192, 202, 30, 30, 2.7, 4);
  // an apple in its right hand!
  // show that it is a field mouse
  
  fill(178, 174, 147);
  ellipse(161, 220, 20, 20);// right hand
  
  stroke(250, 8, 36);
  strokeWeight(3);
  line(232, 130, 216, 150);
  line(226, 130, 232, 138);
  line(222, 150, 216, 144);// scar
  
  noFill();
  strokeWeight(15);
  stroke(178, 174, 147);
  arc(160, 260, 90, 70, 1, 3.6);// tail
  noStroke();
  fill(178, 174, 147);
  triangle(105, 239, 136, 252, 132, 225);
  
  noFill();
  strokeWeight(10);
  stroke(131, 125, 102);
  line(370, 261, 390, 248);
  
  strokeWeight(1);
  stroke(0);
  fill(222, 222, 222);
  triangle(389, 243, 403, 258, 430, 218);// a knife
  pop();
}

