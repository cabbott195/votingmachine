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

$(function() {
    var img = $("#dababy"),
        width = img.get(0).width,
        screenWidth = $(window).width(),
        duration = 5000;

        function animateDababy() {
            img.css("left", -width).animate({
                "left": screenWidth
            }, duration, animateDababy);
        }

        animateDababy();
});

// object.addEventListener("click", animateDababy);