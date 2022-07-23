let img = document.querySelector(".introImage");
let backColor = document.querySelector(".img");
let themChanger = document.querySelector(".theme-changer");
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let skills = document.querySelector(".skills");
let projects = document.querySelector(".projects");
let contact = document.querySelector(".contact");
function fading() {
  $(backColor).toggle({ width: "0" }, { height: "0" });
  $(img).toggleClass("position");
  $(about).toggle("display");
  $(projects).toggle("display");
  $(home).toggle("display");
  $(themChanger).toggle("display");
  $(skills).toggle("display");
  $(contact).toggle("display");
}
//                        20%        40%      60%     80%       100%
// change theme colors {-Beginner -Moderate -Good -Very Good -Excellent}
$("#gear").on("click", function () {
  $(".theme-changer").toggleClass("leftside");
});
$(".theme-changer ul li i").on("click", function () {
  $("body").css({ "background-color": $(this).data("color") }); // background color
  if ($(this).data("color") == "black") {
    $(":root").css("--black-color", "white");
    $(":root").css("--white-color", "black");
    $("html").css("color", "white"); // text color
    $(":root").css("--shadow-color", "rgba(255, 255, 255, 0.1)"); // shadow color
    $(":root").css("--second-color", "white");
  } else if ($(this).data("color") == "white") {
    $(":root").css("--black-color", "black");
    $(":root").css("--white-color", "white");
    $("html").css("color", "black");
    $(":root").css("--shadow-color", "rgba(0, 0, 0, 0.1)");
    $(":root").css("--second-color", "#1a5276");
  }
});
//    20%        40%      60%     80%       100%
// {-Beginner -Moderate -Good -Very Good -Excellent}
let parent = document.querySelectorAll(".skills .container div");
let spans = document.querySelectorAll(".skills .container div span");
// for (let i = 0; i < parent.length; i++) {
//   if ($(parent[i]).data("level") == "Excellent") {
//     $(spans[i]).css("width", "100%");
//   } else if ($(parent[i]).data("level") == "Very Good") {
//     $(spans[i]).css("width", "80%");
//   } else if ($(parent[i]).data("level") == "Good") {
//     $(spans[i]).css("width", "60%");
//   } else if ($(parent[i]).data("level") == "Moderate") {
//     $(spans[i]).css("width", "40%");
//   } else if ($(parent[i]).data("level") == "Beginner") {
//     $(spans[i]).css("width", "20%");
//   }
// }
window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop - 200) {
    for (let i = 0; i < parent.length; i++) {
      if (parent[i].dataset.level == "Excellent") {
        spans[i].style.width = "100%";
      } else if (parent[i].dataset.level == "Very Good") {
        spans[i].style.width = "80%";
      } else if (parent[i].dataset.level == "Good") {
        spans[i].style.width = "60%";
      } else if (parent[i].dataset.level == "Moderate") {
        spans[i].style.width = "40%";
      } else if (parent[i].dataset.level == "Beginner") {
        spans[i].style.width = "20%";
      }
    }
  }
};
