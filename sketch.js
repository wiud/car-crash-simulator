var car,wall,speed,weight,deformation;

function setup() 
{
  deformation=0.5;
  createCanvas(1200,600);
  speed=random(55,90);
  weight=random(400,1500); 
  car = createSprite(50, 300, 50, 50);
  car.velocityX=speed;
  car.shapeColor=color(255);
 wall=createSprite(1000,300,60,height/2);
wall.shapeColor=color(255,255,255);
}

function draw() 
{
  background(0,0,0);  
 
  car.collide(wall);
  if(wall.x-car.x < (car.width+wall.width))
  {
    deformation=speed*speed*weight/2/22500;
    if(deformation=>180)
    {
    car.shapeColor=red;
    }

   if(deformation<180 && deformation >80)
   {
     car.shapeColor = color(230,230,0);
   }
  
if(deformation<80)
   {
 car.shapeColor= color(0,250,0);
   }
 }
 drawSprites();
}
