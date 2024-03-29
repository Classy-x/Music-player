
let audio = document.getElementById('audi');

let play=document.getElementById("play");

let tag=document.getElementById("itag");

play.addEventListener("click",()=>{
    if (audio.paused) {
        audio.play();
        tag.className="fa-solid fa-pause";
        
    } 
    else {
        audio.pause();
        tag.className="fa-solid fa-play"
    }
    play.classList.add('active');
    setTimeout(() => {
        play.classList.remove('active');
    }, 100);
})

let next=document.getElementById("next");
let sour=document.getElementById("sour");

next.addEventListener("click",()=>{
    audio.currentTime += 10;
    next.classList.add('active');
    setTimeout(() => {
        next.classList.remove('active');
    }, 100);

})
let back=document.getElementById("back");

back.addEventListener("click",()=>{
    audio.currentTime -= 10;
    back.classList.add('active');
    setTimeout(() => {
        back.classList.remove('active');
    }, 100);
})

let imageSpan = document.getElementById('img_span');

audio.addEventListener('play', () => {
    imageSpan.classList.add('rotate');
});

audio.addEventListener('pause', () => {
    imageSpan.classList.remove('rotate');
});

let backbut=document.getElementById("sp1");
backbut.addEventListener("click",()=>{
    window.history.back();
    backbut.classList.add('active');
    setTimeout(() => {
        backbut.classList.remove('active');
    }, 100);
})