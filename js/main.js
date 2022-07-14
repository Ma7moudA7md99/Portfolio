let img = document.querySelector(".introImage");
let backColor = document.querySelector(".img");
let about = document.querySelector(".about");
function fading() {
  $(backColor).toggle({ width: "0" }, { height: "0" });
  $(img).toggleClass("position");
  $(about).toggle("display");
}
// text animation function
// var i = 0;
// let text =
//   "Welcome... \n I'm Mahmoud Ahmed... Student at Computer science in Kafr-Elshekh University";
// function typingAnime() {
//   if (i < text.length) {
//     document.querySelector(".text").innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typingAnime, 50);
//   }
// }
// let welcome = text.slice(0, 10);
// $(welcome).css({ "font-size": "30px" });
console.log(document.textContent.includes("I'm"));
