"use strict";

const previous = document.querySelector('.hero-section__slider-btn-previosli');
const next = document.querySelector('.hero-section__slider-btn-next');
const slides = document.querySelectorAll('.hero-section__slide');
const dots = document.querySelectorAll('.hero-section__dot');

let index = 0;

const activeSlideHero = n => {
	for (let slide of slides) {
		slide.classList.remove('hero-section__slide_active');
	}
	slides[n].classList.add('hero-section__slide_active');
}
const activeDotHero = n => {
	for (let dot of dots) {
		dot.classList.remove('hero-section__dot_active');
	}
	dots[n].classList.add('hero-section__dot_active');
}

const prepareCurrentSlideHero = ind => {
	activeSlideHero(ind);
	activeDotHero(ind);
}

const nextSlideHero = () => {
	if (index == slides.length - 1) {
		index = 0;
		prepareCurrentSlideHero(index);
	} else {
		index++;
		prepareCurrentSlideHero(index);
	}
}
const previousSlideHero = () => {
	if (index == 0) {
		index = slides.length - 1;
		prepareCurrentSlideHero(index);
	} else {
		index--;
		prepareCurrentSlideHero(index);
	}
}

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlideHero(index);
	})
})

next.addEventListener('click', nextSlideHero);
previous.addEventListener('click', previousSlideHero);


