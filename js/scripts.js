(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		$("#owl-csel1").owlCarousel({
			items: 4,
			autoplay: false,
			autoplayTimeout: 3000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<i class="fa fa-angle-left" aria-hidden="true"></i>',
						'<img src="images/circle_right.png" alt="">'
					],
			navContainer: '.main-content .custom-nav',
			responsive:{
				0: {
					items: 2,						
				},
				767: {
					items: 3,						
				},
				1200: {
					items: 4,						
				}
			}

		});

		jQuery(".humburger").click(function(){
			jQuery(".mobile-menu").toggleClass("slide")
		});

		jQuery(".mobile-menu .mobile-logo i").click(function() {
			jQuery(".mobile-menu").removeClass("slide");
		});

		jQuery(".experience-hero02 .search-btn").click(function() {
			jQuery(".experience-hero02 .search-btn ul").toggleClass("search-btn-toggle");
		});

		$(".scroll-down").click(function() {
    		$("html, body").animate({ scrollTop: $(".arusha-city").offset().top }, 400);
		});


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);