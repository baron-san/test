let audio1 = new Audio("songs/taylor/cruel.mp3");
let audio2 = new Audio("songs/oasis/Don't.mp3");

 function play_audio1(){
    audio1.play();
}

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",play_audio1);

 function play_audio2(){
    audio2.play();
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",play_audio2);