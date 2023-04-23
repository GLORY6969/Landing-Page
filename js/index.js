$(".owl-carousel").owlCarousel({
	margin: 30,
	loop: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	smartSpeed: 2000,
	responsiveClass: true,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 5,
		},
	},
});
