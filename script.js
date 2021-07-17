var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
audio = new Audio('music.mp3');
auover = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
},100);
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        document.getElementById("alerttxt").style.display = "block";
        document.getElementById("alerttxt").innerHTML = "Game Over. Total Score: "+Math.floor(counter/100);
        counter = 0;
        document.getElementById("scoreSpan").style.display = "none";
        document.getElementById("jump").disabled = true;
        audio.pause();
        auover.play();
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = "Score :"+Math.floor(counter/100);
    }
}, 10);
function startAgain(){
    counter=0;
    block.style.animation = "block 1s infinite linear";
    document.getElementById("scoreSpan").style.display = "block";
    document.getElementById("jump").disabled = false;
    document.getElementById("alerttxt").style.display = "none";
    audio.play();
    auover.pause();
}

