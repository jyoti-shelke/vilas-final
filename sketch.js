var state = "1";
var time;
function preload(){
  backs1 = loadImage("Images/images.jpg");
  down = loadImage("Images/hiclipart.com.png");
  button1 = loadImage("Images/111.png");
  backs2 = loadImage("Images/xZwnDt.jpg");
  button2 = loadImage("Images/hiclipart.com (1).png");
 sound1 = loadSound("sound/Happy-birthday-song.mp3");
  sound2 = loadSound("sound/Click2-Sebastian-759472264.mp3");
  thanks = loadImage("Images/black-white-vector-illustration-words-thank-you-floral-elements-doodle-style-round-design-black-white-vector-169916262.jpg");
  bas = loadImage("Images/maxresdefault.jpg");
  webothimg= loadImage("Images/22.png")
  
}
function setup() {
  createCanvas(600, 400);
  resizeCanvas(window.width,window.height);
arrow = createSprite(282,164);
  arrow.addImage(down);
  arrow.scale = 0.02;
  arrow.rotation = 90;
arrow1= createSprite(394,315);
  arrow1.addImage(down);
  arrow1.scale = 0.01;
  arrow1.rotation = 90;
  arrow1.visible = 0;
  button = createSprite(277,296);
  button.addImage(button1);
  button.scale = 0.3;
  buttons = createSprite(395,362);
  buttons.addImage(button2);
  buttons.scale = 0.1;
  buttons.visible = 0;
  buttons1 = createSprite(30,362);
  buttons1.addImage(button2);
  buttons1.scale = 0.1;
  buttons1.visible = 0;
  sound1.play();

}

function draw() {
  background(220);
  
  if (state === "1"){
    image(backs1,0,0,600,400);
textFont("Georgia");
    fill("pink");
    textSize(30);
       noStroke();
       text("HAPPY BIRTHDAY DEAR AHO",100,100);
    if (mousePressedOver(button)||World.frameCount % 200 === 0){
      button.destroy();
      state = "2";
      arrow.destroy();
    sound2.play()
    }
}
  if (state === "2"){
image(backs2,0,0,600,400);
   
    textSize(20);
    textFont("Inconsolata");
    fill("darkBlue");
  textAlign(CENTER);
       noStroke();
       text("HAPPY BIRTHDAY!!!",400,116);
       text("TO MY DEAR",405,136);
       textAlign(CORNER)
       text("AND THE MOST LOVING ,",410,156);
       text("HUSBAND",410,196);
       text("CLICK ON THE BUTTON",408,258);
       text("TO GO TO MESSAGE",408,278);
    arrow1.visible = 1;
     buttons.visible = 1;
    
    if (mousePressedOver(buttons)||World.frameCount % 400 === 0){
      sound2.play();
      buttons.destroy();
      state = "3";
      arrow1.destroy();
}
  }
  if (state === "3"){
     //background()
   image(bas,0,0)
weboth=createSprite(40,250);
weboth.addImage("weboth",webothimg);
weboth.scale=0.3;
//  weboth.rotate=50;
   
    textAlign(CENTER);
    fill("ghostwhite");
    textFont("Georgia");
    noStroke();
    textSize(20);
    text("Dear AHO andShlok's Pappa,",300,38);
    text(" this year your birthday has added another",300,58)
    text(" year to your life,",300,78);
    text(" and May Swami bestow his blessings on you.",300,98);
    text(" Me n Shloka loves you alot.",300,118);
    text(" You are world to we both.",300,138);
    text(" We both are incomplete without you!!",300,168);
    text("I love you my zhim......!!",300,220)
   if (World.frameCount  % 900 ===0){
     print("Happy birthday sweetheart")
     sound1.stop();
   }
   
  }
  
  drawSprites();
 
}