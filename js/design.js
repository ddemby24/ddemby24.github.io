$(document).ready(function($) {
 	$('#visual').fadeIn(1000);
	$('#writetoUs').fadeIn(1000);
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});
	
	// local scroll
	jQuery('.navbar').localScroll({hash:true, offset: {top: 0},duration: 800, easing:'easeInOutExpo'});


	//드롭다운메뉴 블릿
	$('.dropdown-toggle').focus(function(){
		$(this).find('span').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
		$('.dropdown-toggle').click(function(){
			$(this).find('span').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
			});
	});
	$('.dropdown-toggle').blur(function(){
		$(this).find('span').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
	});
	
	// portfolio
    if($('.isotopeWrapper').length){

        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope
        
        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }


            
        });

        $('#filter a').click(function(){



            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });
        
        
        $(window).smartresize(function(){
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });
        

}  



	if (Modernizr.mq("screen and (max-width:1024px)")) {
			jQuery("body").toggleClass("body");
			
	} else {
		var s = skrollr.init({
			mobileDeceleration: 1,
			edgeStrategy: 'set',
			forceHeight: false,
			smoothScrolling: true,
			smoothScrollingDuration: 300,
				easing: {
					WTF: Math.random,
					inverted: function(p) {
						return 1-p;
					}
				}
			});	
	}



	//scroll menu
	jQuery('.appear').appear();
	jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.nav li').removeClass('active');
			jQuery(".nav a[href='#" + id + "']").parent().addClass("active");				
		});


		//parallax
        var isMobile = false;

        if(Modernizr.mq('only all and (max-width: 1024px)') ) {
            isMobile = true;
        }

        
        if (isMobile == false && ($('#contact').length))
        {


            $(window).stellar({
                responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });

        }
	
	//nicescroll
	$("html").niceScroll({zindex:999,cursorborder:"",cursorborderradius:"2px",cursorcolor:"#191919",cursoropacitymin:.5});
	function initNice() {
		if($(window).innerWidth() <= 960) {
			$('html').niceScroll().remove();
		} else {
			$("html").niceScroll({zindex:999,cursorborder:"",cursorborderradius:"2px",cursorcolor:"#191919",cursoropacitymin:.5});
		}
	}
	$(window).load(initNice);
	$(window).resize(initNice);


jQuery(document).ready(function($) {

	if ( $('img').hasClass('active') ){
	    $('img.active').attr('src', $('img.active').attr('src').split('_off.')[0] + '_on.' + $('img.active').attr('src').split('_off.')[1]);
	}
	$('img.rollover').mouseover(function(){
	    if (!$(this).hasClass('active')) {
			var image_name = $(this).attr('src').split('_off.')[0];
			var image_type = $(this).attr('src').split('_off.')[1];
			$(this).attr('src', image_name + '_on.' + image_type);
		}
	}).mouseout(function(){
		if ( !$(this).hasClass('active') ){
			var image_name = $(this).attr('src').split('_on.')[0];
			var image_type = $(this).attr('src').split('_on.')[1];
			$(this).attr('src', image_name + '_off.' + image_type);
			
		}
	});
	$('.hover_box').mouseover(function(){
		if ( !$(this).prev().hasClass('active') ){
			var image_name = $(this).prev().attr('src').split('_off.')[0];
			var image_type = $(this).prev().attr('src').split('_off.')[1];
			$(this).prev().attr('src', image_name + '_on.' + image_type);
		}
	}).mouseout(function(){
		if ( !$(this).prev().hasClass('active') ){
			var image_name = $(this).prev().attr('src').split('_on.')[0];
			var image_type = $(this).prev().attr('src').split('_on.')[1];
			$(this).prev().attr('src', image_name + '_off.' + image_type);
			
		}
	});
});
$('.partners_de .photo-item').mouseenter(function () {
    $(this).find('.hover').fadeIn(400);
}
).mouseleave(function () {
    $(this).find('.hover').fadeOut(400);
});

});
