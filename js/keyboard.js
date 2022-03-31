let search = document.querySelector("#searchCurrent"),
  keyboard = document.querySelectorAll(".keyboard"),
  visBtn = document.querySelector("#visBtn");
// account = document.querySelector('.account');

search.onclick = () => {
  // account[0].classList.add('hide');
  keyboard[0].classList.remove("keyboard-hidden");
  keyboard[0].classList.add("keyboard-showen");
};
visBtn.onclick = () => {
  keyboard[0].classList.add("keyboard-hidden");
  keyboard[0].classList.remove("keyboard-showen");
  // acc[0].classList.remove('hide');
};
