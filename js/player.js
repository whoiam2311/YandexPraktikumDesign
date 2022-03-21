let track = document.querySelector('#trackCurrent'),
	player = document.querySelectorAll('.player'),
	visBtn = document.querySelector('#visBtn');

track.onclick = () => {
	player[0].classList.toggle('player-hidden');
	player[0].classList.toggle('player-showen');
}
visBtn.onclick = () => {
	player[0].classList.toggle('player-hidden');
	player[0].classList.toggle('player-showen');
};



// document.addEventListener('touchstart', handleTouchStart, false);
// document.addEventListener('touchmove', handleTouchMove, false);


// let x1 = null;
// let y1 = null;

// function handleTouchStart(event) {
//     const firstTouch = event.touches[0];
//     x1 = firstTouch.clientX;
//     y1 = firstTouch.clientY
//     // console.log(x1, y1);
// }

// function handleTouchMove(event) {
//     if (!x1 || !y1) {
//         return false;
//     }
//     let x2 = event.touches[0].clientX;
//     let y2 = event.touches[0].clientY;
//     // console.log(x2, y2);
//     let xDiff = x2 - x1;
//     let yDiff = y2 - y1;

//     if (Math.abs(xDiff) < Math.abs(yDiff)) {
//         if (yDiff > 0) 
//         {
//             player[0].classList.toggle('player-hidden');
//         }
//         else player[0].classList.toggle('player-showen');
//     }
//     x1 = null;
//     y1 = null;
// }
