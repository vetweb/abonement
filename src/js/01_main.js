import {Swiper, Mousewheel, Navigation, Pagination} from 'swiper'
import Scrollbar from 'smooth-scrollbar'
import anime from 'animejs/lib/anime.es.js';

Swiper.use([ Mousewheel, Navigation, Pagination])

document.addEventListener('DOMContentLoaded', () => {
	// smooth-scrollbar
	const tabsBlock = document.querySelector(".js-tabs-block");
	const tabsBlockTwo = document.querySelector(".js-tabs-block2");
	const certifScroll2 = document.querySelector(".js-certif-scroll-block2");
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

	let optionsCertifScroll2= {
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

	if (certifScroll2) {
		Scrollbar.init(certifScroll2, optionsCertifScroll2);
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
				clickable: true,
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

	tabsNav();

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
			let direction = window.innerWidth >= 768 ? 'vertical' : 'horizontal';
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

	selectHandler();
	function selectHandler() {

	selectHeaders.forEach((item) => {
		item.addEventListener('click', selectToggle)
	})

	selectItems.forEach((item) => {
		item.addEventListener('click', selectChose)
	})

		function selectToggle() {
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
	let searchBigInputs = document.querySelectorAll('.js-search-big');
	let filterBlockCloseBtns = document.querySelectorAll('.js-filter-block__close');
	let filterBlocks = document.querySelectorAll('.js-filter-block');

	searchBigInputs.forEach((item) => {
		item.addEventListener('click', showFiletBlock);

		function showFiletBlock() {
			filterBlocks.forEach((elem) => {
				let parentBox = this.closest('.js-parent-box');
				if(!elem.classList.contains('show')) {
					parentBox.classList.add('active');
					elem.classList.add('show');
				} else {
					parentBox.classList.remove('active');
					elem.classList.remove('show');
				}
			})
		}
	})

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


	// slider btn-links
	const swiperBtnLinks = document.querySelector('.js-btn-links');
	let mySwiperBtnLinks;

	if (swiperBtnLinks) {
		createSwiperBtnLinks();
	}

	function createSwiperBtnLinks() {
		mySwiperBtnLinks = new Swiper(swiperBtnLinks, {
			slidesPerView: "auto",
			centeredSlides: true,
			slideToClickedSlide: true,
			speed: 1500,
			breakpoints: {
				// when window width is >= 320px
				769: {
					centeredSlides: false,
				},
			},
		});
	}

	// Video
	const wrapperVideo = document.querySelector('.js-block-video__wrap');
	const wrapperVideos = document.querySelectorAll('.js-block-video__wrap');

	if (wrapperVideo) {
		wrapperVideos.forEach(el => {
			el.addEventListener('click', toggleWrapperVideo);
		})

		function toggleWrapperVideo () {
			let currentVideoWrap = this.closest('.js-block-video__wrap');
			let currentVideo = currentVideoWrap.querySelector('.js-video-with-btn');
			let currentVideoBtn = currentVideoWrap.querySelector('.js-btn-play');

			if (currentVideo.paused) {
				currentVideo.play();
				currentVideoBtn.classList.add('hide');
			} else {
				currentVideo.pause();
				currentVideoBtn.classList.remove('hide');
			}
		}
	}

	// Mobile Menu
	let mobileDropdownCategoryList = document.querySelectorAll('.mobile-menu-list__category')
	let mobileDropdownList = document.querySelectorAll('.mobile-menu-list__category')
	let mobileBurger = document.querySelector('.js-mobile-menu-toggle')
	let mobileMenu = document.querySelector('.js-mobile-menu')

	mobileBurger.addEventListener('click', function () {
		mobileMenu.classList.toggle('show');
		this.classList.toggle('show');
	});

	mobileDropdownCategoryList.forEach(function(elem) {
		elem.addEventListener('click', function () {
			this.classList.toggle('active');
		});
	});


	//Search mobile header
	let searchHeader = document.querySelector('.js-header-search-form')
	let searchToggleIcon = document.querySelector('.js-search-toggle')

	//Top menu header
	let listParentTopMenu = document.querySelector('.js-filter-parent')
	let listItemsTopMenu = listParentTopMenu.querySelectorAll('.js-filter')
	let dropdownFilterMenu = document.querySelector('.js-filter-menu')

	listItemsTopMenu.forEach(function(elem) {
		elem.onmouseover = function(e) {
			e = e || event;
			let target = e.target || e.srcElement;
			dropdownFilterMenu.classList.add('active');
			listParentTopMenu.classList.add('active');
		};

		dropdownFilterMenu.onmouseleave = function(e) {
			e = e || event;
			let target = e.target || e.srcElement;
			listParentTopMenu.classList.remove('active');
			dropdownFilterMenu.classList.remove('active');
		};
	});

	//Modal
	let openBtn = document.querySelector('.js-open-md');
	let closeBtn = document.querySelector('.js-close-md');
	let modalWindow = document.querySelector('.js-modal-window');

	if (openBtn && modalWindow) {
		modalWindowShow();
	}

	//locationChangeModal
	function locationChangeModal () {
		let locationModal = document.querySelector('.js-location-change-modal');
		let locationModalLink = document.querySelector('.js-location-modal-link');
		let locationModalLinkClose = document.querySelector('.js-location-modal-link-close');

		locationModalLink.addEventListener('click', function (){
			locationModal.classList.add('open');
		});

		locationModalLinkClose.addEventListener('click', function (){
			locationModal.classList.remove('open');
		});
	}

	locationChangeModal();

	function modalWindowShow() {

		if (!openBtn) {
			return false;
		}

		let openBtns = document.querySelectorAll('.js-open-md');

		openBtns.forEach((item) => {
			item.addEventListener('click', function openModal() {

				let pathBtnOpen = this.dataset.opn;
				let modalWindow = document.querySelector(`[data-md='${pathBtnOpen}']`);

				if (!modalWindow.classList.contains('show-md')) {
					modalWindow.classList.add('show-md');
					document.body.style.overflowY = 'hidden';
					document.body.style.paddingRight = '14px';
				} else {
					modalWindow.classList.remove('show-md');
					document.body.style.overflowY = 'visible';
					document.body.style.paddingRight = '';
				}
			});
		});

		if (!closeBtn) {
			return false
		}

		let closeBtns = document.querySelectorAll('.js-close-md');

		closeBtns.forEach((item) => {
			item.addEventListener('click', function closeModal() {

				let pathBtnClose = this.dataset.cls;

				let modalWindow = document.querySelector(`[data-md='${pathBtnClose}']`);
				if (modalWindow.classList.contains('show-md')) {
					modalWindow.classList.remove('show-md');
					document.body.style.overflowY = 'visible';
				}
			})
		});

		let modalWindows = document.querySelectorAll('.js-modal-window');

		modalWindows.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target === item) {
					item.classList.remove('show-md');
					document.body.style.overflowY = 'visible';
				}
			});
		});

		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				modalWindow.classList.remove('show-md');
				document.body.style.overflowY = 'visible';
			}
		});
	}

	// show/hidden info-block
	let openBtnsInfoBlocks = document.querySelectorAll('.js-open-info-block');
	let overlaysInfoBlock = document.querySelectorAll('.js-overlay-info-block');
	let closeBtnsInfoBlocks = document.querySelectorAll('.js-close-info-block');

	openBtnsInfoBlocks.forEach( btn => {
		btn.addEventListener('click', showInfoBlock);

		function showInfoBlock() {
			let pathBtnShow= this.dataset.show;
			let infoBlock = document.querySelector(`[data-block='${pathBtnShow}']`);
			let overlay = document.querySelector(`[data-overlay='${pathBtnShow}']`);

			if (!infoBlock.classList.contains('show')) {
				overlay.classList.add('show');
				infoBlock.classList.add('show');
				document.body.style.overflowY = 'hidden';
			} else {
				overlay.classList.remove('show');
				infoBlock.classList.remove('show');
				document.body.style.overflowY = 'visible';
			}
		}
	})

	closeBtnsInfoBlocks.forEach( btn => {
		btn.addEventListener('click', closeInfoBlock);

		function closeInfoBlock(e) {
			e.preventDefault();
			let pathBtnHidden = this.dataset.hidden;
			let infoBlock = document.querySelector(`[data-block='${pathBtnHidden}']`);
			let overlay = document.querySelector(`[data-overlay='${pathBtnHidden}']`);

			if (infoBlock.classList.contains('show')) {
				overlay.classList.remove('show');
				infoBlock.classList.remove('show');
				document.body.style.overflowY = 'visible';
			}
		}
	})

	overlaysInfoBlock.forEach(item => {
		item.addEventListener('click', closeInfoBlock);

		function closeInfoBlock() {
			let pathOverlay = this.dataset.overlay;
			let infoBlock = document.querySelector(`[data-block='${pathOverlay}']`);

			if (infoBlock.classList.contains('show')) {
				item.classList.remove('show');
				infoBlock.classList.remove('show');
				document.body.style.overflowY = 'visible';
			}
		}
	})

	//
	let arrowUp = document.querySelector('.js-arrow-up');

	window.addEventListener('scroll', function () {
		if (pageYOffset > 400) {
			arrowUp.classList.add('show');
		}
		if (pageYOffset <= 400) {
			arrowUp.classList.remove('show');
		}
	});

	arrowUp.addEventListener('click', function () {
		window.scrollTo({top: 0, behavior: 'smooth'});
	});

	//

	//Accordion filter-company-page
	let allSvBtns = document.querySelectorAll('.js-sv-item__btn');
	let allSvItem = document.querySelectorAll('.js-sv-item');
	let allSvCont = document.querySelectorAll('.js-sv-item__cont');


	allSvBtns.forEach((btn) => {
		btn.addEventListener('click', openSvContent);
	});

	function openSvContent() {

		let currentSvItem = this.closest('.js-sv-item');
		let currentSvCont = currentSvItem.querySelector('.js-sv-item__cont');
		let currentSvContWrap = currentSvItem.querySelector('.js-sv-item__wrap');
		let currentSvBtn = currentSvItem.querySelector('.js-sv-item__btn');
		let currentSvContHeight = currentSvContWrap.clientHeight;

		if (!currentSvCont.classList.contains('open')) {
			currentSvItem.classList.add('active');
			currentSvBtn.classList.add('active');
			currentSvCont.style.maxHeight = `${currentSvContHeight}px`;
			currentSvCont.classList.add('open');

			for (let i = 0; i < allSvCont.length; i++) {
				if (allSvCont[i].classList.contains('open') && allSvCont[i] !== currentSvCont) {
					allSvCont[i].classList.remove('open');
					allSvCont[i].style.maxHeight = '0px';
				}
				if (allSvBtns[i].classList.contains('active') && allSvBtns[i] !== currentSvBtn) {
					allSvBtns[i].classList.remove('active');
				}
				if (allSvItem[i].classList.contains('active') && allSvItem[i] !== currentSvItem) {
					allSvItem[i].classList.remove('active');
				}
			}
		} else {
			currentSvItem.classList.remove('active');
			currentSvBtn.classList.remove('active');
			currentSvCont.style.maxHeight = '0px';
			currentSvCont.classList.remove('open');
		}
	}

});
