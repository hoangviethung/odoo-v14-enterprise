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
