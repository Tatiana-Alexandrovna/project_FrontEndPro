"use strict";

const previousText = document.querySelector('.carousel-header__previousli');
const nextText = document.querySelector('.carousel-header__next');
const slidesText = document.querySelectorAll('.carousel-header-text');

let indexHeader = 0;
const activeSlideHeader = n => {
	for (let slide of slidesText) {
		slide.classList.remove('carousel-header-text_active');
	}
	slidesText[n].classList.add('carousel-header-text_active');
}
const nextSlideHeader = () => {
	if (indexHeader == slidesText.length - 1) {
		indexHeader = 0;
		activeSlideHeader(indexHeader);
	} else {
		indexHeader++;
		activeSlideHeader(indexHeader);
	}
}
const previousSlideHeader = () => {
	if (indexHeader == 0) {
		indexHeader = slidesText.length - 1;
		activeSlideHeader(indexHeader);
	} else {
		indexHeader--;
		activeSlideHeader(indexHeader);
	}
}
nextText.addEventListener('click', nextSlideHeader);
previousText.addEventListener('click', previousSlideHeader);

//Show/hidden Log In page
const closeButtonIn = document.querySelector('.sing-in__cross');
const closeButtonUp = document.querySelector('.sing-up__cross');
const logInPage = document.querySelector('.sing-in');
const logUpPage = document.querySelector('.sing-up');
const goBackInPage = document.querySelector('.sing__link_in');

document.querySelector('.header-login').addEventListener('click', hiddenLogIn);
function hiddenLogIn() {
	if (logInPage.style.display == 'none') {
		logInPage.style.display = 'block';
	} else {
		logInPage.style.display = 'none'
	}
}
closeButtonIn.addEventListener('click', () => {
	logInPage.style.display = 'none';
	logUpPage.style.display = 'none';
})

document.querySelector('.sing__link_up').addEventListener('click', hiddenLogUp);
function hiddenLogUp() {
	if (logUpPage.style.display == 'none') {
		logUpPage.style.display = 'block';
	} else {
		logUpPage.style.display = 'none'
	}
}
closeButtonUp.addEventListener('click', () => {
	logUpPage.style.display = 'none';
	logInPage.style.display = 'none';
})
goBackInPage.addEventListener('click', () => {
	logInPage.style.display = 'block';
	logUpPage.style.display = 'none'
})


//Change Pass type In
const changePasswordTypeIn = document.querySelector('.sing__in');
const passwordFieldIn = document.querySelector('.sing__field-in');

changePasswordTypeIn.addEventListener('click', changePassTypeIn);
function changePassTypeIn() {
	if (passwordFieldIn.getAttribute('type') == 'password') {
		passwordFieldIn.setAttribute('type', 'text');
		changePasswordTypeIn.style.backgroundImage = 'url(/progetGeneral/src/img/eye-close.svg)';
	} else {
		passwordFieldIn.setAttribute('type', 'password');
		changePasswordTypeIn.style.backgroundImage = 'url(/progetGeneral/src/img/Eye.svg)';
	}
}

//Change Pass type Up One
const changePasswordTypeUpOne = document.querySelector('.sing__up_one');
const passwordFieldUpOne = document.querySelector('.sing__field-up_one');

changePasswordTypeUpOne.addEventListener('click', changePassTypeUpOne);
function changePassTypeUpOne() {
	if (passwordFieldUpOne.getAttribute('type') == 'password') {
		passwordFieldUpOne.setAttribute('type', 'text');
		changePasswordTypeUpOne.style.backgroundImage = 'url(/progetGeneral/src/img/eye-close.svg)';
	} else {
		passwordFieldUpOne.setAttribute('type', 'password');
		changePasswordTypeUpOne.style.backgroundImage = 'url(/progetGeneral/src/img/Eye.svg)';
	}
}

//Change Pass type Up Two
const changePasswordTypeUpTwo = document.querySelector('.sing__up_two');
const passwordFieldUpTwo = document.querySelector('.sing__field-up_two');

changePasswordTypeUpTwo.addEventListener('click', changePassTypeUpTwo);
function changePassTypeUpTwo() {
	if (passwordFieldUpTwo.getAttribute('type') == 'password') {
		passwordFieldUpTwo.setAttribute('type', 'text');
		changePasswordTypeUpTwo.style.backgroundImage = 'url(/progetGeneral/src/img/eye-close.svg)';
	} else {
		passwordFieldUpTwo.setAttribute('type', 'password');
		changePasswordTypeUpTwo.style.backgroundImage = 'url(/progetGeneral/src/img/Eye.svg)';
	}
}

