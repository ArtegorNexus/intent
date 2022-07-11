"use strict"

//для бургера
let burger = document.querySelector('.burger');
let headerMenu = document.querySelector('.menu-header');
// для смены картинок
let sliderItems = document.querySelectorAll('.slider__item');
let slider = document.querySelector('.slider');
let sliderMiniItems = document.querySelectorAll('.slider__mini_item');
let sliderMini = document.querySelector('.slider__mini');
let counter = 0;
let sliderLength = sliderItems.length;
let arrowNext = document.querySelector('.slider__arrow_right');
let arrowPrev = document.querySelector('.slider__arrow_left');

console.log(sliderItems);
console.log(sliderMiniItems);

function menuFade() {
	headerMenu.classList.toggle('active');
	burger.classList.toggle('active');
	document.body.classList.toggle('_ovhid');
}

function changeSlide(index) {
	sliderItems[index].classList.toggle('active');
	sliderMiniItems[index].classList.toggle('active');
	sliderItems[counter].classList.toggle('active');
	sliderMiniItems[counter].classList.toggle('active');
	counter = index;
}

function nextSlide(){
	if (counter < (sliderLength - 1)) {
		changeSlide(counter + 1);
		console.log('done')
	} else {
		changeSlide(0);
		console.log('done')
	}
}

function prevSlide(){
	if (counter == 0) {
		changeSlide(sliderLength - 1);
		console.log('done')
	} else {
		changeSlide(counter - 1);
		console.log('done')
	}
}

arrowPrev.addEventListener('click', prevSlide);
arrowNext.addEventListener('click', nextSlide);
sliderMini.addEventListener('click', function(event){
	let elem = event.target;
	if (elem.closest('.slider__mini_item')) {
		for (let i = 0; i < sliderLength; i++) {
			if (elem == sliderMiniItems[i].firstChild) {
				changeSlide(i);
			}
		}
	}
});
burger.addEventListener('click', menuFade);