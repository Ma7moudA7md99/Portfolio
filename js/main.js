let img = document.querySelector(".introImage");
let backColor = document.querySelector(".img");
let about = document.querySelector(".about");
let projects = document.querySelector(".projects");
function fading() {
  $(backColor).toggle({ width: "0" }, { height: "0" });
  $(img).toggleClass("position");
  $(about).toggle("display");
  $(projects).toggle("display");
}

