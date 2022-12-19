console.log("Welcome to Spotify");

// Initilize the Variables
let songIndex= 0;
let audioElement= new Audio('Lamonade.mpeg');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Lamonade", filePath: "Lamonade.mpeg", coverPath: "size_l.jpg"},
    {songName: "Cold", filePath: "cold.mpeg", coverPath: "cold.jpg"},
    {songName: "Fight-Back", filePath: "songs/fight-back.mpeg", coverPath: "fight-back.png"},
    {songName: "Nidar", filePath: "nidar.mpeg", coverPath: "nidar.jpeg"},
    {songName: "Trigger", filePath: "trigger.mpeg", coverPath: "trigger.jpg"},
    {songName: "Unstoppable", filePath: "unstoppable.mpeg", coverPath: "unstoppable.jpeg"},
]
songItems.forEach((element, i) =>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity= 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100; 
})