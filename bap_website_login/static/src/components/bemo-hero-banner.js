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
