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
	});

	// BEMO NOTIFICATION
	const bemoNotification = new Swiper(
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

	// BEMO HOME NEWS
	const bemoHomeNews = new Swiper(".bemo-home-news .swiper-container", {
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
});
