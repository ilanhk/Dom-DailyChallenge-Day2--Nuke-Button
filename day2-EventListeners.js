var body = document.querySelector("body")

var button = document.getElementsByTagName("button")[0];

var trump = document.getElementById("trump");

var kim = document.getElementById("kim");


button.addEventListener("click", nuclear_launch);

body.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        nuclear_launch();
    }
});




function nuclear_launch(){
myPlayalarm();
  document.body.style.backgroundImage = "url('nukelaunch.jpg')";
  trump.src="trumpyes2.jpg";
  kim.src="rocketkime2.jpg";
}



function myPlayalarm(){
    var alarm = new Audio("Nuclear explosion sound effect.mp3");
    alarm.play();
}

body.addEventListener("keydown", function(e) {
        if (e.key === "Backspace") {
            undo();
        }
    });


function undo(){
  document.body.style.backgroundImage = "url('nuke_bomb.jpg')";
  trump.src="trumpmiss.jpg";
  kim.src="kimno.jpg";
}



//
// function nuclearExplosion(){
//     var audio = new Audio("Missile_Alert_Sound.mp3");
//     audio.play();
// }
// button.addEventListener('click', myPlay);
//
// function myPlay() {
//     var a = document.getElementById('alarm');
//     a.play();
// } ;
