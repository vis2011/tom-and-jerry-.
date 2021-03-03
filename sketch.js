var cat,cImage,cAnimation,cImage1,cImage2;
var mouse,mImage;
var garden,gImage;


function preload() {
  gImage=loadImage("garden.png");
 cImage=loadImage("cat1.png");
 cAnimation=loadAnimation("cat2.png","cat3.png");
 cImage1=loadImage("cat4.png");
 mImage=loadImage("mouse2.png");
 cat2 = loadAnimation("cat2.png","cat3.png");
 mouse2 = loadAnimation("mouse2.png","mouse3.png");
 cat3 = loadAnimation("cat4.png");
 mouse3 = loadAnimation("mouse4.png");
}

function setup(){
 createCanvas(1000,580);

 garden=createSprite(400,300,500,800);
 garden.addImage(gImage);
 garden.scale=0.8;

  cat=createSprite(670,320,50,40);
  cat.addImage(cImage);
  cat.scale=0.10;

  mouse=createSprite(200,480,20,20);
  mouse.addImage(mImage);
  mouse.scale=0.10;
}

function draw() {
    //Write condition here to evalute if tom and jerry collide


    if(cat.x+60 - mouse.x <= (cat.width - mouse.width)/2){
      mouse.addAnimation("mouseStopped",mouse3);
    cat.addAnimation("catStopped",cat3);
    mouse.changeAnimation("mouseStopped",mouse3);
    cat.changeAnimation("catStopped",cat3);
    mouse.scale=0.08;
    cat.scale=0.08;
    mouse.velocityX=0;
  }
    
    drawSprites();
    keyPressed();
    text(mouseX+","+mouseY,10,45);
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("down")){
    cat.velocityY=5;
    cat.addAnimation("cat_running",cAnimation);
    cat.changeAnimation("cat_running");
   }
   
else if(keyWentUp("down")){
        cat.velocityY=0;
     }

   if(keyDown("left")){
    cat.velocityX=-5;
    cat.addAnimation("cat_running",cAnimation);
    cat.changeAnimation("cat_running");
   }

   else if(keyWentUp("left")){
     cat.velocityX=0;
  }

}
