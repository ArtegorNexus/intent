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
// для добавления красного бэка в портфолио
let portfolioRowNames = document.querySelector('.portfolio__categories');
let portfolioNames = document.querySelectorAll('.portfolio__name');
let portNamesLength = portfolioNames.length;
let portNamesCounter = 0;
// для показа по категориями
let portfolioItems = document.querySelectorAll('.portfolio__item');

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

function changeNameBack(index) {
	portfolioNames[index].classList.toggle('red-back');
	portfolioNames[portNamesCounter].classList.toggle('red-back');
	portNamesCounter = index;
}

function showRightItems(index) {
	let itemName = `_for${index + 1}`;
	for (let elem of portfolioItems) {
		elem.classList.add('no-active');
	}
	for (let elem of portfolioItems) {
		if (elem.classList.contains(itemName)){
			elem.classList.remove('no-active');
			console.log(elem);
		}
	}
}

/*---------------------события-----------------------*/
if (arrowNext) {
	arrowNext.addEventListener('click', nextSlide);
}
if (arrowPrev) {
	arrowPrev.addEventListener('click', nextSlide);
}
if (sliderMini) {
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
}
burger.addEventListener('click', menuFade);
if (portfolioRowNames) {
	portfolioRowNames.addEventListener('click', function(event){
		console.log('portfolio');
		let elem = event.target;
		if (elem.closest('.portfolio__name')){
			for (let i = 0; i < portNamesLength; i++) {
				if (elem == portfolioNames[i]) {
					changeNameBack(i);
					showRightItems(i);
				}
			}
			event.preventDefault();
		}
	});
}