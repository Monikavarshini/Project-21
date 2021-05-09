var bullet,wall,thickness;
var speed,weight;



function setup() {
  createCanvas(1300,400);
 
  speed=random(100,200)
  weight=random(30,52)
  thickness=random(10,100)
  bullet=createSprite(50,200,50,50)
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="blue"
}

function draw() {
  background(255);  
  console.log("moni")
  if (wall.x-bullet.x <=(bullet.width+wall.width)/2){
    bullet.velocityX=0; console.log("hello")
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    console.log(damage)

    if (damage>=10){
      wall.shapeColor="red"
    }
    if (damage<10){
      wall.shapeColor="green"
    }
  }

  else { console.log(false)}
  
  
  drawSprites();
}


function hascollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x
  if(bulletRightEdge.x >=wallLeftEdge.x)
  {
    return true
  }
   return false;
}



