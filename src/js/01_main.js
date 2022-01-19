import {Swiper, Mousewheel, Navigation, Pagination} from 'swiper'
import Scrollbar from 'smooth-scrollbar'

Swiper.use([ Mousewheel, Navigation, Pagination])

document.addEventListener('DOMContentLoaded', () => {

	// smooth-scrollbar
	const tabsBlock = document.querySelector(".js-tabs-block");
	const tabsBlockTwo = document.querySelector(".js-tabs-block2");
	const certifScroll = document.querySelector(".js-certif-scroll-block");
	const galleryScroll = document.querySelector(".js-gallery-scroll-block");

	let optionsTabsBlock = {
		damping: .1,
		alwaysShowTracks: true,
	}

	let optionsTabsBlockTwo = {
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
	if (tabsBlockTwo) {
		Scrollbar.init(tabsBlockTwo, optionsTabsBlockTwo);
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

// Табы
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

	//
	function selectIcons() {
		let elem = document.querySelector('.js-toggle-btn');
		if (!elem) {
			return false;
		}
		let elems = document.querySelectorAll('.js-toggle-btn')

		elems.forEach((item) => {
			item.addEventListener('click', toggleClass)
		})

		function toggleClass() {
			this.classList.add('active');
			for (let k = 0; elems.length  > k; k++) {
				let item = elems[k];
				if (item !== this && item.classList.contains('active')) {
					item.classList.remove('active')
				}
			}
		}
	}
	selectIcons();

//
	const galleryThumbs = document.querySelector('.js-gallery-thumbs');
	const galleryTop = document.querySelector('.js-gallery-top');

	if (galleryThumbs && galleryTop) {

		function getDirection() {
			let direction = window.innerWidth >= 992 ? 'vertical' : 'horizontal';
			return direction;
		}

		let myGalleryThumbs = new Swiper(galleryThumbs, {
			mousewheel: true,
			speed: 1500,
			spaceBetween: 10,
			slideToClickedSlide: true,
			freeMode: true,
			grabCursor: true,
			loop: true,
			direction: getDirection(),
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 0,
					slidesPerView: 4,
				},
			},
			on: {
				resize: function () {
					myGalleryThumbs.changeDirection(getDirection());
				}
			}
		});

		let myGalleryTop = new Swiper(galleryTop, {
			loop: true,
			speed: 1500,
			initialSlide: 0,
			spaceBetween: 10,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			thumbs: {
				swiper: myGalleryThumbs
			}
		});

	    myGalleryThumbs.on('slideChange', () => {
		    myGalleryTop.slideTo(myGalleryThumbs.realIndex, 800)
	    });
	}

// custom select

	let selectHeader = document.querySelector('.js-select__header');
	let selectHeaders = document.querySelectorAll('.js-select__header');
	let selectItems = document.querySelectorAll('.js-select__item');

	if (!selectHeader) {
		return false;
	}
	selectHandler();
	function selectHandler() {

	selectHeaders.forEach((item) => {
		item.addEventListener('click', selectToggle)
	})

	selectItems.forEach((item) => {
		item.addEventListener('click', selectChose)
	})

	function selectToggle() {
		console.log(this.parentElement);
		this.parentElement.classList.toggle('is-active');
	}

	function selectChose() {
		let textSelect = this.innerText,
		select = this.closest('.js-select'),
		currentText =select.querySelector('.js-select__current');
		currentText.innerText = textSelect;
		select.classList.remove('is-active');
	}
	}


	//searchBig
	let searchBigInput = document.querySelector('.js-search-big');
	let searchBigInputs = document.querySelectorAll('.js-search-big');
	let filterBlockCloseBtns = document.querySelectorAll('.js-filter-block__close');
	let filterBlockCloseBtn = document.querySelector('.js-filter-block__close');
	let filterBlocks = document.querySelectorAll('.js-filter-block');

	if (!searchBigInput) {
		return false;
	}

	searchBigInputs.forEach((item) => {
		item.addEventListener('click', showFiletBlock);

		function showFiletBlock() {
			filterBlocks.forEach((elem) => {
				let parentBox = this.closest('.js-parent-box');
				console.log(parentBox);
				if(!elem.classList.contains('show')) {
					parentBox.classList.add('active');
					console.log(this);
					elem.classList.add('show');
				} else {
					parentBox.classList.remove('active');
					elem.classList.remove('show');
				}
			})
		}
	})

	if (!filterBlockCloseBtn) {
		return false;
	}

	filterBlockCloseBtns.forEach((item) => {
		item.addEventListener('click', closeFiletBlock);

		function closeFiletBlock() {
			filterBlocks.forEach((elem) => {
				let parentBox = this.closest('.js-parent-box');
				if(elem.classList.contains('show')) {
					elem.classList.remove('show');
					parentBox.classList.remove('active');
				}
			})
		}
	})


});
