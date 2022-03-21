let track = document.querySelector('#trackCurrent'),
	player = document.querySelectorAll('.keyboard'),
	visBtn = document.querySelector('#visBtn');

track.onclick = () => {
	player[0].classList.toggle('keyboard-hidden');
	player[0].classList.toggle('keyboard-showen');
}
visBtn.onclick = () => {
	player[0].classList.toggle('keyboard-hidden');
	player[0].classList.toggle('keyboard-showen');
};