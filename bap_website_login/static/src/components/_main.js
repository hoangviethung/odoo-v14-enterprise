const fixedBemoHeader = (BemoWebsite) => {
	const header = document.querySelector(".bemo-main-header");
	if (header) {
		if (window.innerWidth > 1025) {
			if (BemoWebsite.scrollTop > header.clientHeight) {
				header.classList.add("bemo-main-header-sticky");
			} else {
				header.classList.remove("bemo-main-header-sticky");
			}
		} else {
			header.classList.add("bemo-main-header-sticky");
		}
	} else {
		console.log('Bemo Debug: [".bemo-main-header"] is not define');
	}
};

const showNavSlideBar = (BemoWebsite) => {
	const btnOpen = document.querySelector(".button-open-nav-sidebar");
	if (btnOpen) {
		btnOpen.addEventListener("click", (e) => {
			BemoWebsite.classList.add("nav-sidebar-open");
		});
	} else {
		console.log('Bemo Debug: [".button-open-nav-sidebar"] is not define');
	}
};

const closeNavSlideBar = (BemoWebsite) => {
	const btnClose = document.querySelector(".button-close-nav-sidebar");
	if (btnClose) {
		btnClose.addEventListener("click", (e) => {
			BemoWebsite.classList.remove("nav-sidebar-open");
		});
	} else {
		console.log('Bemo Debug: [".button-close-nav-sidebar"] is not define');
	}
};

const initSliderBemoHeroBanner = () => {
	// BEMO HERO BANNER
	const BemoSliderHeroBanner = new Swiper(
		".bemo-hero-banner .swiper-container",
		{
			speed: 1000,
			autoplay: true,
			autoplay: {
				delay: 5000,
			},
			loop: true,
			effect: "fade",
			simulateTouch: false,
			pagination: {
				el: ".bemo-hero-banner .swiper-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl:
					".bemo-hero-banner .bemo-button-navigation-slider.next-slider",
				prevEl:
					".bemo-hero-banner .bemo-button-navigation-slider.prev-slider",
			},
		},
	);
};

const initSliderBemoNotification = () => {
	const BemoSliderNotification = new Swiper(
		".bemo-notification .swiper-container",
		{
			speed: 1000,
			pagination: {
				el: ".bemo-notification-pagination",
				type: "fraction",
			},
			simulateTouch: false,
			slidesPerView: 3,
			spaceBetween: 40,
			navigation: {
				nextEl:
					".bemo-notification .bemo-button-navigation-slider.next-slider",
				prevEl:
					".bemo-notification .bemo-button-navigation-slider.prev-slider",
			},
		},
	);
};

const initSliderBemoHomeNews = () => {
	const BemoSliderHomeNews = new Swiper(".bemo-home-news .swiper-container", {
		speed: 1000,
		autoplay: true,
		autoplay: {
			delay: 5000,
		},
		slidesPerView: 3,
		spaceBetween: 16,
		navigation: {
			nextEl:
				".bemo-home-news .bemo-button-navigation-slider.next-slider",
			prevEl:
				".bemo-home-news .bemo-button-navigation-slider.prev-slider",
		},
	});
};

odoo.define("bap_website_login", function (require) {
	"use strict";

	const BemoWebsite = document.querySelector("#wrapwrap");

	(function (e) {
		initSliderBemoHeroBanner();
		initSliderBemoNotification();
		initSliderBemoHomeNews();
		fixedBemoHeader(BemoWebsite);
		showNavSlideBar(BemoWebsite);
		closeNavSlideBar(BemoWebsite);
	})();

	BemoWebsite.addEventListener("scroll", (e) => {
		fixedBemoHeader(BemoWebsite);
	});
});
