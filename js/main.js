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
// change theme colors
$("#gear").on("click", function () {
  $(".theme-changer").toggleClass("leftside");
});
$(".theme-changer ul li i").on("click", function () {
  $("body").css({ "background-color": $(this).data("color") });
  if ($(this).data("color") == "black") {
    $(":root").css("--black-color", "white");
    $(":root").css("--white-color", "black");
    $(".text h1::after").css("background-color", "white");
    $("html").css("color", "white");
    $(":root").css("--shadow-color", "rgba(255, 255, 255, 0.1)");
    $(":root").css("--second-color", "white");
  } else if ($(this).data("color") == "white") {
    $(":root").css("--black-color", "black");
    $(":root").css("--white-color", "white");
    $(".text h1::after").css("background-color", "black");
    $("html").css("color", "black");
    $(":root").css("--shadow-color", "rgba(0, 0, 0, 0.1)");
    $(":root").css("--second-color", "#1a5276");
  }
});
