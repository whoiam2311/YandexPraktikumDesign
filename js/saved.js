let track = document.querySelector('#SavedCurrent'),
	player = document.querySelectorAll('.saved'),
	visBtn = document.querySelector('#visBtn');

track.onclick = () => {
	player[0].classList.toggle('player-hidden');
	player[0].classList.toggle('player-showen');
}
visBtn.onclick = () => {
	player[0].classList.toggle('player-hidden');
	player[0].classList.toggle('player-showen');
};