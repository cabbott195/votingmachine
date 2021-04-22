//My onload function
window.onload = function() {
    let socialPrompt = prompt ("If you found a bag of money on the ground and your social security number was the amount that you found, how much money would you have?");
    student["ssn"] = socialPrompt;
}
//Onclick functions
function myWindow(){
    myWindow = window.open("patrick2.mp4", "width=150,height=1500");
}

function myWindow2(){
    myWindow2 = window.open("dababy.mp4", "width=150,height=1500");
}

// function User(name, id){
//     this.name = "Colby";

//     console.log(this.name)
// }

// //"This" Function
// const counter = {
//     count: 0,
//     next: function () {
//         return ++this.count;
//     }
// };

// counter.next();

var myDiv = document.getElementById('mcg');

myDiv.onmouseover = function() { 
    alert('entered');
}

myDiv.onmouseout = function() { 
    alert('left');
}

object.addEventListener("mouseover", myScript);