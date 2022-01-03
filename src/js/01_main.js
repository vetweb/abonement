import {Swiper, Mousewheel, Navigation, Pagination} from 'swiper'

Swiper.use([ Mousewheel, Navigation, Pagination])

document.addEventListener('DOMContentLoaded', () => {

	//Слайдер standard__slider
	const standardSwiper = document.querySelector('.js-standard-slider');
	const standardSwipers = document.querySelectorAll('.js-standard-slider');
	let myStandardSwiper;

	if (standardSwiper) {
		createStandardSwiper();
	}

	function createStandardSwiper() {
		standardSwipers.forEach((el) => {
			myStandardSwiper = new Swiper(el, {
				direction: "horizontal",
				loop: false,
				speed: 1000,
				slidesPerView: 'auto',
				freeMode: true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				scrollbar: {
					el: ".swiper-scrollbar",
					hide: true,
				},
			});
		});
	}

	//js-banner-slider
	const bannerSwiper = document.querySelector('.js-banner-slider');
	const bannerSwipers = document.querySelectorAll('.js-banner-slider');
	let myBannerSwiper;

	if (bannerSwiper) {
		createBannerSwiper();
	}

	function createBannerSwiper() {
		bannerSwipers.forEach((el) => {
			myBannerSwiper = new Swiper(el, {
				direction: "horizontal",
				loop: true,
				speed: 1000,
				slidesPerView: 1,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
			});
		});
	}
});

//js-xs-slider
const xsSwiper = document.querySelector('.js-xs-slider');
const xsSwipers = document.querySelectorAll('.js-xs-slider');
let myXsSwiper;

if (xsSwiper) {
	createXsSwiper();
}

function createXsSwiper() {
	xsSwipers.forEach((el) => {
		myXsSwiper = new Swiper(el, {
			direction: "horizontal",
			loop: true,
			speed: 1000,
			slidesPerView: 1,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			}
		});
	});
}

//js-card3-slider
const threeSwiper = document.querySelector('.js-card3-slider');
const threeSwipers = document.querySelectorAll('.js-card3-slider');
let myThreeSwiper;

if (threeSwiper) {
	createThreeSwiper();
}

function createThreeSwiper() {
	threeSwipers.forEach((el) => {
		myThreeSwiper = new Swiper(el, {
			direction: "horizontal",
			speed: 1000,
			slidesPerView: 1.3,
			spaceBetween: 10,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
			},
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
					grabCursor: true,
				}
			}
		});
	});
}
