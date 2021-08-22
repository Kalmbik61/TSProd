const func = function () {
  $(".list__item").on("click", function () {
    $(this).toggleClass("open").find(".list__text").slideToggle("300");
  });
};

$(document).ready(function () {
  func();
});
