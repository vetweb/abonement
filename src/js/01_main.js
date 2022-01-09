import {Swiper, Mousewheel, Navigation, Pagination} from 'swiper'
import Scrollbar from 'smooth-scrollbar'

Swiper.use([ Mousewheel, Navigation, Pagination])

document.addEventListener('DOMContentLoaded', () => {

	// smooth-scrollbar
	const tabsBlock = document.querySelector(".js-tabs-block");
	const certifScroll = document.querySelector(".js-certif-scroll-block");
	const galleryScroll = document.querySelector(".js-gallery-scroll-block");

	let optionsTabsBlock = {
		damping: .1,
		alwaysShowTracks: true,
	}

	let optionsCertifScroll= {
		damping: .1,
		alwaysShowTracks: true,
	}

	let optionsGalleryScroll= {
		damping: .1,
		alwaysShowTracks: true,
	}

	if (tabsBlock) {
		Scrollbar.init(tabsBlock, optionsTabsBlock);
	}

	if (certifScroll) {
		Scrollbar.init(certifScroll, optionsCertifScroll);
	}

	if (galleryScroll) {
		Scrollbar.init(galleryScroll, optionsGalleryScroll);
	}

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
					nextEl: el.querySelector(".swiper-button-next"),
					prevEl: el.querySelector(".swiper-button-prev"),
				},
				scrollbar: {
					el: el.querySelector(".swiper-scrollbar"),
					hide: true,
				},
				pagination: {
					el: el.querySelector(".swiper-pagination"),
					clickable: true,
				}
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
					nextEl: el.querySelector(".swiper-button-next"),
					prevEl: el.querySelector(".swiper-button-prev"),
				},
				pagination: {
					el: el.querySelector(".swiper-pagination"),
					clickable: true,
				},
			});
		});
	}

	//Slider work-description__slider
	//Slider work-direction__slider
	const swiperDir = document.querySelector('.js-work-direction__slider');
	const swiperDesc = document.querySelector('.js-work-description__slider');

	if (swiperDir) {

		function getDirection() {
			let windowWidth = window.innerWidth;
			let direction = window.innerWidth >= 992 ? 'vertical' : 'horizontal';

			return direction;
		}

		const swiperWorkDirection = new Swiper(swiperDir, {
			direction: getDirection(),
			loop: true,
			mousewheel: true,
			speed: 1500,
			grabCursor: true,
			spaceBetween: 10,
			slideToClickedSlide: true,
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 'auto',
					spaceBetween: 24,
					initialSlide: 0,
					centeredSlides: false,
				},
				992: {
					initialSlide: 2,
					centeredSlides: true,
					spaceBetween: 0,
					slidesPerView: 5,
					grabCursor: true,
				},
			},
			on: {
				resize: function () {
					swiperWorkDirection.changeDirection(getDirection());
				},
			},
		});

		const swiperWorkDescription = new Swiper(swiperDesc, {
			loop: true,
			speed: 1500,
			effect: "fade",
			initialSlide: 2,
			grabCursor: false,
			spaceBetween: 10,
			slideToClickedSlide: true,
			fadeEffect: {
				crossFade: true
			}
		});

		swiperWorkDirection.on('slideChange', () => {
			swiperWorkDescription.slideTo(swiperWorkDirection.realIndex, 800)
		});
	}

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
					nextEl: el.querySelector(".swiper-button-next"),
					prevEl: el.querySelector(".swiper-button-prev"),
				},
				pagination: {
					el: el.querySelector(".swiper-pagination"),
					clickable: true,
				},
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
					nextEl: el.querySelector(".swiper-button-next"),
					prevEl: el.querySelector(".swiper-button-prev"),
				},
				scrollbar: {
					el: el.querySelector(".swiper-scrollbar"),
					hide: false,
				},
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					}
				}
			});
		});
	}

// Табы на странице Blog
	let tabNavLink = document.querySelectorAll('.js-tabs-nav__tab');
	let tabContent = document.querySelectorAll('.js-tabs-content__el');

	if (tabContent && tabNavLink) {
		tabsNav();
	}

	function tabsNav() {
		tabNavLink.forEach(item => {
			item.addEventListener('click', selectTab);
		});

		function selectTab(e) {
			e.preventDefault();
			tabNavLink.forEach(item => {

				if (item === this) {
					this.classList.add('active');
				} else {
					item.classList.remove('active');
				}

				let pathTab = this.dataset.id;
				let targetContent = document.querySelector(`[data-content-id='${pathTab}']`);

				tabContent.forEach(item => {
					item.classList.remove('active');
				});

				if (!targetContent.classList.contains('active')) {
					targetContent.classList.add('active');
				}

			});
		}

	}

	tabsNav();

});
