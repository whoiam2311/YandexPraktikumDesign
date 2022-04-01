const search = document.querySelector("#searchCurrent"),
  hidden = document.querySelectorAll(".hidden"),
  storage = document.querySelector("#storageCurrent");
visBtn = document.querySelector("#visibleBtn");
visStr = document.querySelector("#hiddenBtn");

search.onclick = () => {
  hidden[0].classList.remove("hidden");
  hidden[0].classList.add("showen");
};

visBtn.onclick = () => {
  hidden[0].classList.add("hidden");
  hidden[0].classList.remove("showen");
};

storage.onclick = () => {
  hidden[1].classList.remove("hidden");
  hidden[1].classList.add("showen");
};

visStr.onclick = () => {
  hidden[1].classList.add("hidden");
  hidden[1].classList.remove("showen");
};
