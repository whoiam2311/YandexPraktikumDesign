let slide1 = document.querySelector("#slide1"),
  slide2 = document.querySelector("#slide2"),
  slide3 = document.querySelector("#slide3"),
  s1b = document.querySelector("#s1b"),
  s2b1 = document.querySelector("#s2b1"),
  s2b2 = document.querySelector("#s2b2"),
  s3b = document.querySelector("#s3b");

s1b.onclick = () => {
  slide1.classList.add("left");
  slide2.classList.remove("right");
};

s2b1.onclick = () => {
  slide1.classList.remove("left");
  slide2.classList.add("right");
};

s2b2.onclick = () => {
  slide2.classList.add("left");
  slide3.classList.remove("right");
};

s3b.onclick = () => {
  slide3.classList.add("right");
  slide2.classList.remove("left");
};
