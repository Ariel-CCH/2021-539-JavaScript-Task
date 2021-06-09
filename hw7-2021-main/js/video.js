window.addEventListener("load", function() {
    console.log("Good job opening the window")
});


 //elements
var video = document.getElementById("player1");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var slower = document.getElementById("slower");
var faster = document.getElementById("faster");
var skip = document.getElementById("skip");
var mute = document.getElementById("mute");
var slider = document.getElementById("slider");
var vintage = document.getElementById("vintage");
var orig = document.getElementById("orig");

//functions
function videoAction(event){
    switch(event.target.id){
        case "play":
            video.play();
            document.getElementById("volume").innerHTML =  video.volume*100 + '%';
            console.log("Play Video");
            break;
         case "pause":
            video.pause();
            console.log("Pause Video");
            break; 
    }
}

function videoRate(event){
    var originalRate = video.playbackRate;
    switch(event.target.id){
        case "slower":
                video.playbackRate = originalRate * 0.95;
                video.play();
                console.log("New speed is:" , video.playbackRate);
            break;
            
        case "faster":
            video.playbackRate = originalRate * 1.05;
            video.play();
            console.log("New speed is:" , video.playbackRate);
            break;
    }
}

function skipAhead(){
    console.log("Original location: " , video.currentTime);
    video.currentTime +=15;

    if (video.currentTime >= video.duration){
        video.currentTime = 0;
        console.log("Going back to beginning");
    }
    console.log("New location: " , video.currentTime);
}

function toggleMute(){
    if(video.muted === false){
        video.muted = true;
        document.getElementById("mute").innerHTML='Unmute';
    }else{
        video.muted = false;
        document.getElementById("mute").innerHTML='Mute';
    }
}

function volume(e){
    video.volume = e.currentTarget.value /100;
    document.getElementById("volume").innerHTML =  video.volume*100 + '%';
    console.log(video.volume);
}

function videoStyle(event){
    switch(event.target.id){
        case "vintage":
            video.classList.add('oldSchool');
            break;    
        case "orig":
            video.classList.remove('oldSchool');
            break;
    }
}

// events
play.addEventListener('click', videoAction);
pause.addEventListener('click', videoAction);
slower.addEventListener('click', videoRate);
faster.addEventListener('click', videoRate);
skip.addEventListener('click', skipAhead);
mute.addEventListener('click', toggleMute);
slider.addEventListener('change', volume);
vintage.addEventListener('click', videoStyle);
orig.addEventListener('click', videoStyle);