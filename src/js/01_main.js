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

});