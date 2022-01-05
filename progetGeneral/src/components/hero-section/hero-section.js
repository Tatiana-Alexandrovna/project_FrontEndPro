"use strict";

const previous = document.querySelector('.hero-section__slider-btn-previosli');
const next = document.querySelector('.hero-section__slider-btn-next');
const slides = document.querySelectorAll('.hero-section__slide');
const dots = document.querySelectorAll('.hero-section__dot');

let index = 0;

const activeSlide = n => {
	for (let slide of slides) {
		slide.classList.remove('hero-section__slide_active');
	}
	slides[n].classList.add('hero-section__slide_active');
}
const activeDot = n => {
	for (let dot of dots) {
		dot.classList.remove('hero-section__dot_active');
	}
	dots[n].classList.add('hero-section__dot_active');
}

const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
}

const nextSlide = () => {
	if (index == slides.length - 1) {
		index = 0;
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
}
const previousSlide = () => {
	if (index == 0) {
		index = slides.length - 1;
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlide(index);
	})
})

next.addEventListener('click', nextSlide);
previous.addEventListener('click', previousSlide);


