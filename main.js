var noseX=0;
var noseY=0;
var diffrence=0;
var rightWristX=0;
var leftWristX=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);

    canvas=createCanvas(550,550);
    canvas.position(560,150);
    
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " +noseX+" ,noseY = "+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        diffrence=Math.floor(leftWristX-rightWristX);
        console.log("leftWristX = "+leftWristX+" ,rightWristX = "+rightWristX+" ,diffrence = "+diffrence);

    }

}

function modelLoaded(){
    console.log("posenet is initialized")
}

function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML="width and height of the square is: "+diffrence+" px";


    fill('#11baf7');
    stroke('red');
    square(noseX,noseY,diffrence);

}

