// let img = document.createElement('img');
// img.src = "https://js.cx/clipart/train.gif"; // (*)
// object.addEventListener("load", img);

// let screenLog = document.getElementsByClassName('mcg');
// document.addEventListener('mousemove', mcg);

// function mcg(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }

// (function blink() {
//     $('hypno').fadeOut(500).fadeIn(500, blink);
//   })();

// $(function() {
//     var img = $("#dababy"),
//         width = img.get(0).width,
//         screenWidth = $(window).width(),
//         duration = 5000;

//         function animateDababy() {
//             img.css("left", -width).animate({
//                 "left": screenWidth
//             }, duration, animateDababy);
//         }

//         animateDababy();
// });

// object.addEventListener("click", animateDababy);
function myWindow(){
    myWindow = window.open("patrick2.mp4", "width=150,height=1500");
}

function User(name, id){
    this.name = "Colby";

    console.log(this.name)
}