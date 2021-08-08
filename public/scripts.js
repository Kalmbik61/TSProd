$(document).ready(function () {
  var con_1 = document.getElementById("lottie-1");
  var params_1 = {
    container: con_1,
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "lottie/box_1/box_1/data.json",
  };
  var anim_1 = lottie.loadAnimation(params_1);
  anim_1.addEventListener("complete", () => {
    con_1.classList.add("hide");
    con_1_1.classList.remove("hide");
  });

  var con_1_1 = document.getElementById("lottie-1-1");
  var params_1_1 = {
    container: con_1_1,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/box_1/box1_1/data.json",
  };
  var anim_1_1 = lottie.loadAnimation(params_1_1);

  //

  var con_2 = document.getElementById("lottie-2");
  var params_2 = {
    container: con_2,
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "lottie/box_2/box_2/data.json",
  };
  var anim_2 = lottie.loadAnimation(params_2);
  anim_2.addEventListener("complete", () => {
    con_2.classList.add("hide");
    con_2_2.classList.remove("hide");
  });

  var con_2_2 = document.getElementById("lottie-2-2");
  var params_2_2 = {
    container: con_2_2,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/box_2/box2_2/data.json",
  };
  var anim_2_2 = lottie.loadAnimation(params_2_2);

  //

  var con_3 = document.getElementById("lottie-3");
  var params_3 = {
    container: con_3,
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "lottie/box_3/box_3/data.json",
  };
  var anim_3 = lottie.loadAnimation(params_3);
  anim_3.addEventListener("complete", () => {
    con_3.classList.add("hide");
    con_3_3.classList.remove("hide");
  });

  var con_3_3 = document.getElementById("lottie-3-3");
  var params_3_3 = {
    container: con_3_3,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/box_3/box3_3/data.json",
  };
  var anim_3_3 = lottie.loadAnimation(params_3_3);

  //

  var con_4 = document.getElementById("lottie-4");
  var params_4 = {
    container: con_4,
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "lottie/box_4/box_4/data.json",
  };
  var anim_4 = lottie.loadAnimation(params_4);
  anim_4.addEventListener("complete", () => {
    con_4.classList.add("hide");
    con_4_4.classList.remove("hide");
  });

  var con_4_4 = document.getElementById("lottie-4-4");
  var params_4_4 = {
    container: con_4_4,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/box_4/box4_4/data.json",
  };
  var anim_4_4 = lottie.loadAnimation(params_4_4);

  //

  var con_5 = document.getElementById("lottie-5");
  var params_5 = {
    container: con_5,
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: "lottie/box_5/box_5/data.json",
  };
  var anim_5 = lottie.loadAnimation(params_5);
  anim_5.addEventListener("complete", () => {
    con_5.classList.add("hide");
    con_5_5.classList.remove("hide");
  });

  var con_5_5 = document.getElementById("lottie-5-5");
  var params_5_5 = {
    container: con_5_5,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/box_5/box5_5/data.json",
  };
  var anim_5_5 = lottie.loadAnimation(params_5_5);

  var arrMain = [];
  var startAnimation = function () {
    if ($(document).scrollTop() > arrMain[0] && $(document).scrollTop() < arrMain[1]) {
      anim_1.play();
    } else if ($(document).scrollTop() > arrMain[2] && $(document).scrollTop() < arrMain[3]) {
      anim_2.play();
    } else if ($(document).scrollTop() > arrMain[4] && $(document).scrollTop() < arrMain[5]) {
      anim_3.play();
    } else if ($(document).scrollTop() > arrMain[6] && $(document).scrollTop() < arrMain[7]) {
      anim_4.play();
    } else if ($(document).scrollTop() > arrMain[8] && $(document).scrollTop() < arrMain[9]) {
      anim_5.play();
    }
  };

  setTimeout(function () {
    $(".image-wrapper").each(function () {
      var imageContainer = $(this);
      var minScroll = imageContainer.offset().top - $(window).outerHeight();
      var maxScroll = imageContainer.offset().top;
      arrMain.push(minScroll, maxScroll);

      startAnimation();

      $(document).scroll(function () {
        startAnimation();
      });
    });
  }, 400);

  $(".list__item").on("click", function () {
    $(this).toggleClass("open").find(".list__text").slideToggle("300");
  });
});
