video = "";
status_1 = "";

function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDatector = ml5.objectDetector('cocossd', model_loaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function model_loaded(){
    console.log("Model Loaded!");
    status_1 = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}