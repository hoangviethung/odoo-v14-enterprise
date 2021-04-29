odoo.define("bap_website_login", function (require) {
	"use strict";

	// BEMO HERO BANNER
	const bemoHeroBanner = new Swiper(".bemo-hero-banner .swiper-container", {
		speed: 1000,
		autoplay: true,
		autoplay: {
			delay: 5000,
		},
		loop: true,
		effect: "fade",
		pagination: {
			el: ".bemo-hero-banner .swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		navigation: {
			nextEl: ".bemo-hero-banner .button-navigation-slider.next",
			prevEl: ".bemo-hero-banner .button-navigation-slider.prev",
		},
	});

	// BEMO NOTIFICATION
	const bemoNotification = new Swiper(
		".bemo-notification .swiper-container",
		{
			speed: 1000,
			autoplay: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: ".bemo-notification-pagination",
				type: "fraction",
			},
			simulateTouch: false,
			slidesPerView: 3,
			spaceBetween: 40,
		},
	);

	// BEMO HOME NEWS
	const bemoHomeNews = new Swiper(".bemo-home-news .swiper-container", {
		speed: 1000,
		autoplay: true,
		autoplay: {
			delay: 5000,
		},
		slidesPerView: 3,
		spaceBetween: 13,
	});
});
