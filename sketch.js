/*var dog, happyDog,foodS, foodStock;
var dogImg, happyDogImg;
var database;
var foodObj, feed, addFood, fedTime, lastFed;

function preload()
{
	dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(1000, 400);

  foodObj = new Food()

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);

  dog = createSprite(800,230,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  
  feed=createButton("Feed the Dog");
  feed.position(700,95)
  feed.mousePressed(addFoods)

  addFood=createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
}


function draw() { 
  background(46,139,87) 

  foodObj.display()

  fedTime = database.ref('FeedTime');
  fedTime.on("value", function (data) {
    lastFed = data.val()
  })

  fill(255,255,254);
  textSize(15)
  if(lastFed>=12){
    text("Last Feed: " + lastFed%12 + " PM", 350,30)
  } else if(lastFed==0) {
    text("Lest Feed: 12AM", 350,30)
  } else{
    text("Last Feed: " + lastFed + " AM", 350,30)
  }

  if( foodS!== undefined) {
    textSize(17);
    fill(255);
    stroke("black");
    text("Food Remaning :"+foodS,170,100);
    
  }
  
 drawSprites();

}

function readStock(data){
  foodS = data.val();
}
  
function writeStock(x){
  if(x <= 0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref("/").update({
    Food : x,
  })
}

function feedDog() {
  dog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food: foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods() {
  foodS++
  database.ref('/'). update( {
    Food: foodS
  })
}*/

var dog, sadDog, happydog, database;
var foodS, foodStock;
var addFood, foodObj;
var feed, lastFed;

function preload(){
  sadDog=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
  createCanvas(1000,400)

  foodObj= new Food()

  foodStock=database.ref('Food')
  foodStock.on("value", readStock)

  dog = createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale = 0.15;

  addFood=createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)

  feed=createButton("Feed the Dog");
  feed.position(700,95)
  feed.mousePressed(feedDog)

}

function draw() {
  background(46,139,87)
  foodObj.display()

  fedTime=database.ref('FeedTime')
  fedTime.on("value", function(data){
    lastFed=data.val()
  })

  fill(255,255,255)
  textSize(15)

  if(lastFed>=12){
    text("Last Feed: " + lastFed%12 + "PM", 350,30)
  } else if(lastFed==0) {
    text("Last Feed: 12 AM", 350,30)
  } else{
    text("Last Feed: " + lastFed + "AM", 350,30)
  }

  drawSprites()
}

function readStock(data){
  foodS = data.val();
  foodObj.updateFoodStock(foodS)
}

function feedDog() {
  dog.addImage(happyDog)
  foodS-1

  
  foodObj.getFoodStock()-1
  database.ref('/').update({
    Food: foodObj.getFoodStock(),
      FeedTime:hour()
  })
}

function addFoods() {
  dog.addImage(sadDog)
  foodS++
  database.ref('/'). update( {
    Food: foodS
  })
}


