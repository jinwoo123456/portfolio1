let menuSubCtr = document.querySelector(".menu-sub-container");
let menuCtr = document.querySelector(".menu-container");

let hd = () => {
  $(".menu-sub-container").hide();
};

$(" ul > li").mouseenter(function () {
  $(this).children(".menu-sub-container").stop().slideDown(400);
  $(this).children(".menu-sub-container").show();
  // $(".menu-container").css({
  //   "background-color": "white",
  // });
  // $(".menu").css({
  //   color: "rgb(184, 3, 123)",
  // });
  // $(this).children(".menu-sub-container").css({
  //   "background-color": "white",
  // });
});
$(" ul > li").mouseleave(function () {
  $(this).children(".menu-sub-container").stop().slideUp(100);
  // $(".menu-container").css({
  //   "background-color": "rgb(184, 3, 123)",
  // });
  // $(".menu").css({
  //   color: "white",
  // });
  // $(this).children(".menu-sub-container").css({
  //   "background-color": "rgb(184, 3, 123)",
  // });
});
hd();

const popup = () => {
  const open = document.querySelector(".popup1");
  const close = document.querySelector(".close");
  const popup = document.querySelector(".popup1-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup();
const popup2 = () => {
  const open = document.querySelector(".popup2");
  const close = document.querySelector(".close2");
  const popup = document.querySelector(".popup2-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup2();
const popup3 = () => {
  const open = document.querySelector(".popup3");
  const close = document.querySelector(".close3");
  const popup = document.querySelector(".popup3-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup3();
const popup4 = () => {
  const open = document.querySelector(".popup4");
  const close = document.querySelector(".close4");
  const popup = document.querySelector(".popup4-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup4();
const popup5 = () => {
  const open = document.querySelector(".popup5");
  const close = document.querySelector(".close5");
  const popup = document.querySelector(".popup5-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup5();
const popup6 = () => {
  const open = document.querySelector(".popup6");
  const close = document.querySelector(".close6");
  const popup = document.querySelector(".popup6-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup6();
const popup7 = () => {
  const open = document.querySelector(".popup7");
  const close = document.querySelector(".close7");
  const popup = document.querySelector(".popup7-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup7();
const popup8 = () => {
  const open = document.querySelector(".popup8");
  const close = document.querySelector(".close8");
  const popup = document.querySelector(".popup8-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup8();
const popup9 = () => {
  const open = document.querySelector(".popup9");
  const close = document.querySelector(".close9");
  const popup = document.querySelector(".popup9-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup9();
const popup10 = () => {
  const open = document.querySelector(".popup10");
  const close = document.querySelector(".close10");
  const popup = document.querySelector(".popup10-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup10();
const popup11 = () => {
  const open = document.querySelector(".popup11");
  const close = document.querySelector(".close11");
  const popup = document.querySelector(".popup11-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup11();
const popup12 = () => {
  const open = document.querySelector(".popup12");
  const close = document.querySelector(".close12");
  const popup = document.querySelector(".popup12-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup12();
const popup13 = () => {
  const open = document.querySelector(".popup13");
  const close = document.querySelector(".close13");
  const popup = document.querySelector(".popup13-1");

  open.addEventListener("click", () => {
    popup.showModal();
  });
  close.addEventListener("click", () => {
    popup.close();
  });
};
popup13();
