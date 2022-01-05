"use strict";

const days = document.querySelector('.countdown__days');
const hours = document.querySelector('.countdown__hours');
const minutes = document.querySelector('.countdown__minutes');
const seconds = document.querySelector('.countdown__seconds');

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateLeftTime() {
	const currentTime = new Date();
	const diff = nextYear - currentTime;
	const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
	const secondsLeft = Math.floor(diff / 1000) % 60;
	days.innerHTML = daysLeft;
	hours.innerHTML = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
	minutes.innerHTML = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
	seconds.innerHTML = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}
updateLeftTime();
setInterval(updateLeftTime, 1000);


