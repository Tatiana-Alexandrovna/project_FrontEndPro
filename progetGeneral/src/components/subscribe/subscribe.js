"use strict";

const subscribeButtons = document.querySelectorAll('.subscribe__button');

subscribeButtons.forEach(function (subscribeButton) {
	subscribeButton.addEventListener('click', () => {
		subscribeButton.classList.toggle('subscribe__button_active');

	})
})


