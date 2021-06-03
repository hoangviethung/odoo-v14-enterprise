class Tab {
	constructor(selector) {
		this.selector = document.querySelector(selector);
		if (this.selector) {
			this.navigationItems = Array.from(
				this.selector.querySelectorAll("[toggle-for]"),
			);
			this.contentList = Array.from(
				this.selector.querySelectorAll("[tab-id]"),
			);
			this.init();
		}
	}

	changeTabWhenClicked() {
		this.navigationItems.forEach((element, index) => {
			element.addEventListener("click", (e) => {
				e.preventDefault();
				const tabTarget = element.attributes["toggle-for"].value;
				const targetDOM = Array.from(
					this.selector.querySelectorAll(`[tab-id='${tabTarget}']`),
				);
				this.navigationItems.forEach((eleClicked, eleClickedIndex) => {
					if (eleClickedIndex != index) {
						eleClicked.classList.remove("active");
					}
				});
				this.contentList.forEach((tabContentElement) => {
					if (
						tabContentElement.attributes["tab-id"].value !=
						tabTarget
					) {
						tabContentElement.style.display = "none";
						tabContentElement.classList.remove("show");
					}
				});
				element.classList.add("active");
				targetDOM.forEach((item) => {
					item.style.display = "block";
				});
				setTimeout(() => {
					targetDOM.forEach((item) => {
						item.classList.add("show");
					});
				}, 50);
			});
		});
	}

	activeFirstTab() {
		if (this.navigationItems.length > 0) {
			this.navigationItems[0].click();
		}
	}

	init() {
		this.changeTabWhenClicked();
		this.activeFirstTab();
	}
}

const headerVerify = (BemoWebsite, isInverted) => {
	const BemoHeader__v1 = BemoWebsite.querySelector(".bemo-main-header-v1");
	if (isInverted == "true" && BemoHeader__v1) {
		BemoHeader__v1.classList.add("bemo-header-inverted");
	} else {
		console.log(
			'Bemo Debug: [".bemo-main-header-v1"] is not define or "isInverted" == False',
		);
	}
};

const navVerify = (BemoWebsite, nameCurrentPage) => {
	if (nameCurrentPage == "login-page") {
		document
			.querySelector(".o_connected_user")
			.classList.add("hiden-nav-main-navbar");
	}
};

const footerVerify = (BemoWebsite, nameCurrentPage) => {
	if (nameCurrentPage == "login-page") {
		document.querySelector("footer").classList.add("d-none");
	}
};

const pageVerify = (BemoWebsite) => {
	const blockData = BemoWebsite.querySelector("#page-verify-template");
	if (blockData) {
		const isInverted = blockData.getAttribute("header-inverted");
		const nameCurrentPage = blockData.getAttribute("current-page");
		navVerify(BemoWebsite, nameCurrentPage);
		footerVerify(BemoWebsite, nameCurrentPage);
		headerVerify(BemoWebsite, isInverted);
	} else {
		console.log('Bemo Debug: ["#page-verify-template"] is not define');
	}
};

const fixedBemoHeader = (BemoWebsite) => {
	const header = document.querySelector(".bemo-main-header-v1");
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
			autoplay: {
				delay: 5000,
			},
			resizeObserver: true,
			loop: true,
			effect: "fade",
			simulateTouch: false,
			pagination: {
				el: ".bemo-hero-banner .swiper-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: ".bemo-hero-banner .bemo-button-navigation-slider.next-slider",
				prevEl: ".bemo-hero-banner .bemo-button-navigation-slider.prev-slider",
			},
			on: {
				init: function () {
					stopAutoPlaySlider(".bemo-hero-banner", this);
				},
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
			slidesPerView: 1,
			spaceBetween: 40,
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1025: {
					slidesPerView: 3,
				},
			},
			navigation: {
				nextEl: ".bemo-notification .bemo-button-navigation-slider.next-slider",
				prevEl: ".bemo-notification .bemo-button-navigation-slider.prev-slider",
			},
		},
	);
	return BemoSliderNotification;
};

const initSliderBemoHomeNews = () => {
	const BemoSliderHomeNews = new Swiper(".bemo-home-news .swiper-container", {
		speed: 1500,
		autoplay: {
			delay: 5000,
		},
		simulateTouch: false,
		slidesPerView: 1,
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1025: {
				slidesPerView: 3,
			},
		},
		navigation: {
			nextEl: ".bemo-home-news .bemo-button-navigation-slider.next-slider",
			prevEl: ".bemo-home-news .bemo-button-navigation-slider.prev-slider",
		},
		on: {
			init: function () {
				stopAutoPlaySlider(".bemo-home-news", this);
			},
		},
	});
	return BemoSliderHomeNews;
};

const stopAutoPlaySlider = (el, swiper) => {
	document.querySelector(el).addEventListener("mouseenter", (e) => {
		swiper.autoplay.stop();
	});

	document.querySelector(el).addEventListener("mouseleave", (e) => {
		swiper.autoplay.start();
	});
};

odoo.define("bemo_theme_frontend", function (require) {
	"use strict";
	const BemoWebsite = document.querySelector("#wrapwrap");
	(function (e) {
		pageVerify(BemoWebsite);
		initSliderBemoHeroBanner();
		initSliderBemoNotification();
		initSliderBemoHomeNews();
		showNavSlideBar(BemoWebsite);
		closeNavSlideBar(BemoWebsite);
		const PricingBoard = new Tab(".hvh-pricing-board .tab-container");
		const FormCheckout = new Tab(".hvh-form-checkout .tab-container");
	})();

	BemoWebsite.addEventListener("scroll", (e) => {});

	window.addEventListener("resize", (e) => {});
});
