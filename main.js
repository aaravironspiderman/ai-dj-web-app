var song_status = "";
var leftWrist_score = 0;
var rightWrist_score = 0;

var leftWrist_x = 0;
var leftWrist_y = 0;

var rightWrist_x = 0;
var rightWrist_y = 0;



function preload() {
   sound = loadSound("coffin dance.mp3")
   sound = loadSound("Lean on.mp3")
}



function setup() {
    canvas = createCanvas(500, 450);
    background("darkblue");
    canvas.center();

    video = createCapture(VIDEO);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function draw() {  
    image(video,0,0,500,450);
    // image(pic/video, x,y,w,h);
        fill("red");
        stroke("blue");
        sound_variable.isPlaying("Lean on.mp3")
        if(leftwrist_score >=0.2)
        {
            circle(leftWrist_x,leftWrist_y,30);
            sound_variable.stop("coffin dance.mp3")
        }
        if(sound = false)
        {
            sound("song1 will be played when left wrist is shown")
            sound("lean on.mp3 will be played when left wrist is shown")
        }
        sound_variable.isPlaying("coffin dance.mp3")
        if(rightwrist_score >=0.2)
        {
            circle(rightWrist_x,rightWrist_y,30);
            sound_variable.stop("Lean on.mp3")
        }
        if(sound = false)
        {
            sound("song2 will be played when right wrist is shown")
            sound("coffin dance.mp3 will be played when right wrist is shown")
        }

}

function modelLoaded(){
    
    console.log("Model is Loaded");
}

function start_button() {
    sound.play();

function gotPoses(results)
{
    results[0].pose.keypoints[9].leftwrist_score;
    results[0].pose.keypoints[9].rightwrist_score;
}
}
