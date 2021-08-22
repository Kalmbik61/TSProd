document.addEventListener("DOMContentLoaded", () => {
  const fav = document.querySelector("#fav_id");
  const first = [
    "./fav/first/2.ico",
    "./fav/first/3.ico",
    "./fav/first/4.ico",
    "./fav/first/5.ico",
    "./fav/first/6.ico",
    "./fav/first/7.ico",
    "./fav/first/8.ico",
  ];
  const second = [
    "./fav/second/1.ico",
    "./fav/second/2.ico",
    "./fav/second/3.ico",
    "./fav/second/4.ico",
    "./fav/second/5.ico",
    "./fav/second/6.ico",
    "./fav/second/7.ico",
    "./fav/second/8.ico",
  ];
  const thrid = [
    "./fav/thrid/1.ico",
    "./fav/thrid/2.ico",
    "./fav/thrid/3.ico",
    "./fav/thrid/4.ico",
    "./fav/thrid/5.ico",
    "./fav/thrid/6.ico",
    "./fav/thrid/7.ico",
    "./fav/thrid/8.ico",
    "./fav/thrid/9.ico",
    "./fav/thrid/10.ico",
    "./fav/thrid/11.ico",
  ];

  const firstChange = () => {
    setTimeout(() => (fav.href = first[0]), 100);
    setTimeout(() => (fav.href = first[1]), 200);
    setTimeout(() => (fav.href = first[2]), 300);
    setTimeout(() => (fav.href = first[3]), 400);
    setTimeout(() => (fav.href = first[4]), 500);
    setTimeout(() => (fav.href = first[5]), 600);
    setTimeout(() => (fav.href = first[6]), 700);
    setTimeout(() => secondChange(), 800);
  };

  const secondChange = () => {
    setTimeout(() => (fav.href = second[0]), 100);
    setTimeout(() => (fav.href = second[1]), 200);
    setTimeout(() => (fav.href = second[2]), 300);
    setTimeout(() => (fav.href = second[3]), 400);
    setTimeout(() => (fav.href = second[4]), 500);
    setTimeout(() => (fav.href = second[5]), 600);
    setTimeout(() => (fav.href = second[6]), 700);
    setTimeout(() => (fav.href = second[7]), 800);
    setTimeout(() => thridChange(), 900);
  };

  const thridChange = () => {
    setTimeout(() => (fav.href = thrid[0]), 100);
    setTimeout(() => (fav.href = thrid[1]), 200);
    setTimeout(() => (fav.href = thrid[2]), 300);
    setTimeout(() => (fav.href = thrid[3]), 400);
    setTimeout(() => (fav.href = thrid[4]), 500);
    setTimeout(() => (fav.href = thrid[5]), 600);
    setTimeout(() => (fav.href = thrid[6]), 700);
    setTimeout(() => (fav.href = thrid[7]), 800);
    setTimeout(() => (fav.href = thrid[8]), 900);
    setTimeout(() => (fav.href = thrid[9]), 1000);
  };
  setInterval(() => firstChange(), 5000);

});
