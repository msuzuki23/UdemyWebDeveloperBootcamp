var isPurple = false;
var button = document.querySelector("button");

// document.querySelector("button").addEventListener("click",function () {
//     if(isPurple) {
//         document.querySelector("body").style.background = "white";
//     } else {
//         document.querySelector("body").style.background = "purple";
//     }
//     isPurple = !isPurple;
// })


button.addEventListener("click", function() {
    document.body.classList.toggle("purple");
})