let menuSubCtr = document.querySelector(".menu-sub-container");
let menuCtr = document.querySelector(".menu-container");

let hd = () => {
  $(".menu-sub-container").hide();
};

$(" ul > li").mouseenter(function () {
  $(this).children(".menu-sub-container").stop().slideDown(400);
  $(this).children(".menu-sub-container").show();
  $(".menu-container").css({
    "background-color": "white",
  });
  $(".menu").css({
    color: "rgb(184, 3, 123)",
  });
  $(this).children(".menu-sub-container").css({
    "background-color": "white",
  });
});
$(" ul > li").mouseleave(function () {
  $(this).children(".menu-sub-container").stop().slideUp(100);
  $(".menu-container").css({
    "background-color": "rgb(184, 3, 123)",
  });
  $(".menu").css({
    color: "white",
  });
  $(this).children(".menu-sub-container").css({
    "background-color": "rgb(184, 3, 123)",
  });
});
hd();
