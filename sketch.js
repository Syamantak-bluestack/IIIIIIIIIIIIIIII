const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
   setBg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    /*engine = Engine.create();
    world = engine.world;*/

}

function draw(){

    if(backgroundImg)
    {
        background(backgroundImg);
    }


  //  Engine.update(engine);

    


}

async function setBg(){

    var res=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var resjson=await res.json();
    var dttm=resjson.datetime;
    var hr=dttm.slice(11,13);


    if(hr>=4 && hr<=5)
    bg="sunrise1.png";
    else
    if(hr>=5 && hr<=6)
    bg="sunrise2.png";
    else  
    if(hr>=6 && hr<=7)
    bg="sunrise3.png";
    else
    if(hr>=7 && hr<=8)
    bg="sunrise4.png";
    else
    if(hr>=8 && hr<=9)
    bg="sunrise5.png";
    else
    if(hr>=9 && hr<=10)
    bg="sunrise6.png";
    else
    if(hr>=17 && hr<=18)
    bg="sunset7.png";
    else
    if(hr>=18 && hr<=19)
    bg="sunset8.png";
    else
    if(hr>=19 && hr<=20)
    bg="sunset9.png";
    else
    if(hr>=20 && hr<=21)
    bg="sunset10.png";
    else
    if(hr>=22 && hr<=23)
    bg="sunset11.png";
    else
    if(hr>=23 && hr<=24)
    bg="sunset12.png"
    
    backgroundImg=loadImage(bg);
    

}
