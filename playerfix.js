var debug = false;

var jumper = document.getElementsByClassName("jumper");
if(debug) console.log(jumper);
jumper[0].style.height = "90.5%";
jumper[1].style.height = "90.5%";

var player = document.getElementById("mediaplayer");
if(debug) console.log(player);
player.controls = true;

var fullscreen = document.getElementsByClassName("no_fullscreen");
if(debug) console.log(fullscreen);
fullscreen[0].remove();

if(debug) console.log("Done");