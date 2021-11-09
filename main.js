function preload(){

}

function setup(){
canvas = createCanvas(640, 480);
canvas.position(150,150);

video = createCapture(VIDEO);
video.hide();

tint_colour = "";
}

function draw(){
    image(video, 230, 150, 220, 200);
     
    fill(255, 67, 89);
    stroke(255, 67, 89);
    circle(50,50,80);
    circle(590,50,80);
    circle(50,430,80);
    circle(590,430,80);

    fill(55, 90, 73);
    stroke(55, 90, 73);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);

    tint(tint_colour);
}

function applyFilter(){
   tint_colour = document.getElementById("colour").value; 
}

function takeSnapshot(){
    save("mySelfieWhatever.png");
}