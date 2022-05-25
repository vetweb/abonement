import {Swiper, Mousewheel, Navigation, Pagination} from 'swiper'
import Scrollbar from 'smooth-scrollbar'
import smoothscroll from 'smoothscroll-polyfill';
import {Fancybox, Carousel, Panzoom} from "@fancyapps/ui";

smoothscroll.polyfill();
Swiper.use([Mousewheel, Navigation, Pagination])

document.addEventListener('DOMContentLoaded', () => {

	//File loading with preview
	function handleFileSelect(evt) {
		let file = evt.target.files; // FileList object
		let f = file[0];
		// Only process image files.
		if (!f.type.match('image.*')) {
			alert("Image only please....");
		}
		let reader = new FileReader();
		// Closure to capture the file information.
		reader.onload = (function (theFile) {
			return function (e) {
				// Render thumbnail.
				let span = document.createElement('span');
				span.innerHTML = ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
				document.getElementById('outputFile').insertBefore(span, null);
			};
		})(f);
		// Read in the image file as a data URL.
		reader.readAsDataURL(f);
	}

	if (document.getElementById('file')) {
		document.getElementById('file').addEventListener('change', handleFileSelect, false);
	}

	//Mobile Menu
	const mobileMenuItems = document.querySelectorAll('.js-mobile-menu-item')
	const menuFilter = document.querySelector('.js-filter-menu')
	const menuMobileHeader = document.querySelector('.js-mobile-menu-header')
	const menuMobileHeaderBackLink = document.querySelector('.js-mobile-menu-header-back')
	const menuMobileHeaderTitle = document.querySelector('.mobile-menu__header-title')

	mobileMenuItems.forEach((item) => {
		item.addEventListener('click', function () {
			const dataAtr = item.dataset.linkText;
			menuMobileHeaderTitle.innerHTML = dataAtr
			this.classList.add('active');
			menuFilter.classList.add('show-mob');
			menuMobileHeader.classList.add('show');
		})
	});

	menuMobileHeaderBackLink.addEventListener('click', function () {
		menuFilter.classList.remove('show-mob');
		menuMobileHeader.classList.remove('show');

		mobileMenuItems.forEach((item) => {
			item.classList.remove('active');
		})
	})


	//Rating
	function rating() {
		const eventItems = document.querySelectorAll('.js-card-events')

		eventItems.forEach((item) => {
			if (eventItems) {
				const ratingItems = item.querySelectorAll('.js-rating-el')
				const ratingCount = item.querySelectorAll('.js-rating-count')
				const ratingParent = item.querySelectorAll('.js-rating')
				let clickItem = false

				if (ratingItems) {
					ratingItems.forEach((ratingItem, w) => {
						ratingItem.addEventListener('click', (event) => {
							ratingItems.forEach((e, r) => {
								e.classList.remove('active')
								if (r <= w) {
									e.classList.toggle('active')
								}
							});
							clickItem = true
							const ratingData = item.dataset.rating;
						});

						ratingItem.addEventListener('mouseover', () => {
							if (!clickItem) {
								ratingItems.forEach((e, r) => {
									e.classList.remove('active')
									if (r <= w) {
										e.classList.toggle('active')
									}
								})
							}
						});

						ratingItem.parentNode.addEventListener('mouseleave', () => {
							if (!clickItem) {
								ratingItem.classList.remove('active')
							}
						});
					})
				}

			}
		})
	}

	rating()

	// smooth-scrollbar
	const tabsBlock = document.querySelector(".js-tabs-block");
	const certifScroll2 = document.querySelector(".js-certif-scroll-block2");
	const certifScroll = document.querySelector(".js-certif-scroll-block");
	const galleryScroll = document.querySelector(".js-gallery-scroll-block");
	const modalCity = document.querySelector(".js-modal-city");

	let optionsTabsBlock = {
		damping: .1,
		alwaysShowTracks: true,
	}

	let optionsCertifScroll = {
		damping: .1,
		alwaysShowTracks: true,
	}

	let optionModalCity = {
		damping: .1,
		alwaysShowTracks: true,
	}

	let optionsCertifScroll2 = {
		damping: .1,
		alwaysShowTracks: true,
	}

	let optionsGalleryScroll = {
		damping: .1,
		alwaysShowTracks: true,
	}

	if (tabsBlock) {
		Scrollbar.init(tabsBlock, optionsTabsBlock);
	}

	if (modalCity) {
		Scrollbar.init(modalCity, optionModalCity);
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

	Scrollbar.initAll();

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
				centeredSlides: true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false
				},
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
			for (let k = 0; elems.length > k; k++) {
				let item = elems[k];
				if (item !== this && item.classList.contains('active')) {
					item.classList.remove('active')
				}
			}
		}
	}

	selectIcons();

//
	const galleryThumbsSelector = document.querySelector('.js-gallery-thumbs');
	const galleryTopSelector = document.querySelector('.js-gallery-top');

	if (galleryThumbsSelector && galleryTopSelector) {

		function getDirection() {
			return window.innerWidth >= 480 ? 'vertical' : 'horizontal';
		}

		let galleryTop = new Swiper(galleryTopSelector, {
			spaceBetween: 10,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			loopedSlides: 4,
			loop: true
		});
		let galleryThumbs = new Swiper(galleryThumbsSelector, {
			spaceBetween: 10,
			centeredSlides: true,
			slidesPerView: "auto",
			slideToClickedSlide: true,
			direction: getDirection(),
			freeMode: true,
			grabCursor: true,
			loop: true,
			loopedSlides: 4,
			breakpoints: {
				480: {
					spaceBetween: 0,
				},
				on: {
					resize: function () {
						galleryThumbs.changeDirection(getDirection());
					}
				}
			}
		});

		galleryTop.on('slideChangeTransitionEnd', function () {
			let index_currentSlide = galleryTop.realIndex;
			let currentSlide = galleryTop.slides[index_currentSlide]
			galleryThumbs.slideTo(index_currentSlide, 1000, false);
		});

		galleryThumbs.on('slideChangeTransitionEnd', function () {
			let index_currentSlide = galleryThumbs.realIndex;
			let currentSlide = galleryThumbs.slides[index_currentSlide]
			galleryTop.slideTo(index_currentSlide, 1000, false);
		});

	}

// custom select

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
				currentText = select.querySelector('.js-select__current');
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
				if (!elem.classList.contains('show')) {
					parentBox.classList.add('active');
					elem.classList.add('show');
				} else {
					parentBox.classList.remove('active');
					elem.classList.remove('show');
				}
			})
		}
	})

	//FavoritesIconClicked
	function cardListeners() {
		const cards = document.querySelectorAll('.js-item-card');
		cards.forEach((item) => {

			//Favorites
			const favoriteIcon = item.querySelector('.js-favorites-block');
			if (favoriteIcon) {
				favoriteIcon.addEventListener("click", function () {
					favoriteIcon.classList.toggle('active');
				})
			}

			//Add to cart
			const btnAdded = item.querySelector('.js-add-to-cart');
			if (btnAdded) {
				btnAdded.addEventListener("click", function () {
					btnAdded.classList.toggle('loading');
				})
			}
		})
	}

	cardListeners()

	//help window toggle
	function helpWindowToggle() {
		let helpWindowToggleBtn = document.querySelector('.js-help-window-toggle');
		let helpWindow = document.querySelector('.js-help-window');

		helpWindowToggleBtn.addEventListener("click", function () {
			helpWindow.classList.toggle('show');
		})
	}

	helpWindowToggle()

	//Search open
	function SearchToggle() {
		let inptSearch = document.querySelector('.js-search-toggle');
		let headerCenterBlock = document.querySelector('.header__center');
		let searchInput = headerCenterBlock.querySelector('.search__input')

		if (!inptSearch) {
			return false
		}
		let inptSearchVal = inptSearch.value;

		inptSearch.onclick = function () {
			headerCenterBlock.classList.add('header__center-active');
			inptSearch.parentElement.classList.add('search__field-active');
			searchInput.focus();
		}

		inptSearch.onblur = function () {

			if (inptSearchVal.length === 0) {
				headerCenterBlock.classList.remove('header__center-active');
				inptSearch.parentElement.classList.remove('search__field-active');
			}
		}

		document.addEventListener('click', function (event) {
			if (!event.target.closest('.header__center')) {
				headerCenterBlock.classList.remove('header__center-active');
				inptSearch.parentElement.classList.remove('search__field-active');
				searchInput.value = "";
			}
		}, false);
	}

	SearchToggle()


	filterBlockCloseBtns.forEach((item) => {
		item.addEventListener('click', closeFiletBlock);

		function closeFiletBlock() {
			filterBlocks.forEach((elem) => {
				let parentBox = this.closest('.js-parent-box');
				if (elem.classList.contains('show')) {
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

		function toggleWrapperVideo() {
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
	let isMenuShow = false;

	function bodyFix(isMenuShow) {
		if (isMenuShow === true) {
			document.body.style.overflowY = 'hidden';
			document.body.style.paddingRight = '14px';
		} else {
			document.body.style.overflowY = 'visible';
			document.body.style.paddingRight = '';
		}
	}

	mobileBurger.addEventListener("click", function () {
		if (isMenuShow) {
			mobileMenu.classList.remove('show');
			this.classList.remove('show');
			bodyFix(false);
			isMenuShow = false;
		} else {
			mobileMenu.classList.add('show');
			this.classList.add('show');
			bodyFix(true);
			isMenuShow = true;
		}
	});

	mobileDropdownCategoryList.forEach(function (elem) {
		let elemLink = elem.querySelector('.mobile-menu-list__category-link')
		elemLink.addEventListener('click', function () {
			elem.classList.toggle('active');
		});
	});


	//Search mobile header
	let searchHeader = document.querySelector('.js-header-search-form')
	let searchToggleIcon = document.querySelector('.js-search-toggle')

	//Top menu header
	let listParentTopMenu = document.querySelector('.js-filter-parent')
	let listItemsTopMenu = listParentTopMenu.querySelectorAll('.js-filter')
	let dropdownFilterMenu = document.querySelector('.js-filter-menu')
	let menuOverlay = document.querySelector('.js-menu-filter-overlay')
	let topMenuList = document.querySelectorAll('.top-menu__item')

	menuOverlay.onmouseenter = function (e) {
		e = e || event;
		this.classList.remove('active');
		listParentTopMenu.classList.remove('active');
		dropdownFilterMenu.classList.remove('active');
	};

	topMenuList.forEach(function (topMenuitem) {
		let elemLink = topMenuitem.querySelector('.top-menu__link');
		elemLink.onmouseover = function (e) {
			listParentTopMenu.classList.remove('active');
			dropdownFilterMenu.classList.remove('active');
			menuOverlay.classList.remove('active');
		};
	})

	listItemsTopMenu.forEach(function (elem) {
		elem.onmouseover = function (e) {
			e = e || event;
			let target = e.target || e.srcElement;
			dropdownFilterMenu.classList.add('active');
			listParentTopMenu.classList.add('active');
			menuOverlay.classList.add('active');
		};

		dropdownFilterMenu.onmouseleave = function (e) {
			e = e || event;
			let target = e.target || e.srcElement;
			listParentTopMenu.classList.remove('active');
			dropdownFilterMenu.classList.remove('active');
			menuOverlay.classList.remove('active');
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
	function locationModal() {
		let locationModalLink = document.querySelector('.js-location-link-list');
		let locationModal = document.querySelector('.js-location-modal');

		locationModalLink.addEventListener('click', function () {
			locationModal.classList.add('open');
		});
	}

	function locationChangeModal() {
		let locationModal = document.querySelector('.js-location-change-modal');
		let locationModalLink = document.querySelectorAll('.js-location-modal-link');
		let locationModalLinkClose = document.querySelector('.js-location-modal-link-close');

		locationModalLink.forEach((itemLink) => {
			itemLink.addEventListener('click', function () {
				locationModal.classList.add('open');
			});
		});

		locationModalLinkClose.addEventListener('click', function () {
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
					isMenuShow = true;
					bodyFix(isMenuShow);
				} else {
					modalWindow.classList.remove('show-md');
					isMenuShow = false;
					bodyFix(isMenuShow);
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
					isMenuShow = false;
					bodyFix(isMenuShow);
				}
			})
		});

		let modalWindows = document.querySelectorAll('.js-modal-window');

		modalWindows.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target === item) {
					item.classList.remove('show-md');
					isMenuShow = false;
					bodyFix(isMenuShow);
				}
			});
		});

		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				modalWindow.classList.remove('show-md');
				isMenuShow = false;
				bodyFix(isMenuShow);
			}
		});
	}

	// show/hidden info-block
	let openBtnsInfoBlocks = document.querySelectorAll('.js-open-info-block');
	let overlaysInfoBlock = document.querySelectorAll('.js-overlay-info-block');
	let closeBtnsInfoBlocks = document.querySelectorAll('.js-close-info-block');

	openBtnsInfoBlocks.forEach(btn => {
		btn.addEventListener('click', showInfoBlock);

		function showInfoBlock() {
			let pathBtnShow = this.dataset.show;
			let infoBlock = document.querySelector(`[data-block='${pathBtnShow}']`);
			let overlay = document.querySelector(`[data-overlay='${pathBtnShow}']`);

			if (!infoBlock.classList.contains('show')) {
				overlay.classList.add('show');
				infoBlock.classList.add('show');
				isMenuShow = true;
				bodyFix(isMenuShow);
			} else {
				overlay.classList.remove('show');
				infoBlock.classList.remove('show');
				isMenuShow = false;
				bodyFix(isMenuShow);
			}
		}
	})

	closeBtnsInfoBlocks.forEach(btn => {
		btn.addEventListener('click', closeInfoBlock);

		function closeInfoBlock(e) {
			e.preventDefault();
			let pathBtnHidden = this.dataset.hidden;
			let infoBlock = document.querySelector(`[data-block='${pathBtnHidden}']`);
			let overlay = document.querySelector(`[data-overlay='${pathBtnHidden}']`);

			if (infoBlock.classList.contains('show')) {
				overlay.classList.remove('show');
				infoBlock.classList.remove('show');
				isMenuShow = false;
				bodyFix(isMenuShow);
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
				isMenuShow = false;
				bodyFix(isMenuShow);
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

	const rangeInput = document.querySelectorAll('.range-input__input input'),
		priceInput = document.querySelectorAll('.range-input input'),
		range = document.querySelectorAll('.range-slider .range-progress');

	let priceGap = 1000;
	priceInput.forEach(input => {
		input.addEventListener("input", e => {
			let minPrice = parseInt(priceInput[0].value),
				maxPrice = parseInt(priceInput[1].value);

			if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
				if (e.target.className === "input-min") {
					rangeInput[0].value = minPrice;
					range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
				} else {
					rangeInput[1].value = maxPrice;
					range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
				}
			}
		});
	});

	rangeInput.forEach(input => {
		input.addEventListener("input", e => {
			let minVal = parseInt(rangeInput[0].value),
				maxVal = parseInt(rangeInput[1].value);
			if ((maxVal - minVal) < priceGap) {
				if (e.target.className === "range-min") {
					rangeInput[0].value = maxVal - priceGap
				} else {
					rangeInput[1].value = minVal + priceGap;
				}
			} else {
				priceInput[0].value = minVal;
				priceInput[1].value = maxVal;
				range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
				range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
			}
		});
	});

	//
	let inputTypeDate = document.querySelectorAll('input[type="date"]');
	inputTypeDate.forEach((input) => {
		input.addEventListener('focus', function (e) {

			let label = document.querySelector(`[for="${e.target.id}"]`);
			label.style.color = 'transparent';
			input.style.color = '#000';
		})
	})

	let btnGeoGet = document.querySelector('.js-modal-geo-user');

	if (btnGeoGet) {
		btnGeoGet.addEventListener('click', function () {
			navigator.geolocation.getCurrentPosition(
				displayLocationInfo,
				handleLocationError,
				{maximumAge: 1500000, timeout: 0}
			);
		})
	}

	function displayLocationInfo(position) {
		const lng = position.coords.longitude;
		const lat = position.coords.latitude;

		console.log(`longitude: ${lng} | latitude: ${lat}`);
	}

	function handleLocationError(error) {
		switch (error.code) {
			case 3:
				// timeout was hit, meaning nothing's in the cache
				// let's provide a default location:
				displayLocationInfo({coords: {longitude: 33.631839, latitude: 27.380583}});

				// now let's make a non-cached request to get the actual position
				navigator.geolocation.getCurrentPosition(displayLocationInfo, handleLocationError);
				break;
			case 2:
				// ...
				break;
			case 1:
			// ...
		}
	}


	//Link to google map
	let toMapLink = document.querySelector('.js-to-map-link');
	if (toMapLink) {
		const link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent(toMapLink.textContent) + "' target='_blank' class='link-s grid-row__link'>" + "Посмотреть на карте" + "</a>";
		toMapLink.textContent = ''
		toMapLink.insertAdjacentHTML("afterBegin", link);
	}

	// Initialize and add the map
	function initMap() {
		// The location of Uluru
		const uluru = {lat: 53.9500344, lng: 27.6163732};
		// The map, centered at Uluru
		const map = new google.maps.Map(document.getElementById("map_canvas"), {
			zoom: 15,
			center: uluru,
		});
		// The marker, positioned at Uluru
		const marker = new google.maps.Marker({
			position: uluru,
			map: map,
		});
	}

	initMap()

});
