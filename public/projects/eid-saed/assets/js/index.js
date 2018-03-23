  /* # With The Name Of Allah
     # Ali Almohaya // Almo7aya  => https://fb.com/almo7aya
     # 18/6/2017    
     # Eid Sa'ed Mikrotick hotspot template */

// scrollTo function sets the scroll of body and html to a value 
function scrollHBTo(where) {
    $('html, body').animate({
        scrollTop: where
    }, 1200);
};


$(function () { // document is ready let's go

    'use strict';

    /* inti nice scroll lib
    ############################################################### */
    $("html").niceScroll({
        cursorcolor: "#652D90",
        cursorwidth: "10px",
        cursorborderradius: 0,
        cursorborder: "1px solid #fff"
    });


    /* Set The up button
    ############################################################### */

    (function ($) {

        var $up = $('.up');
        $(window).on('scroll', function () {
            var WscrollTop = $(this).scrollTop();
            if (WscrollTop > 100) {
                $up.addClass('show');
            } else {
                $up.removeClass('show');
            }
        });

        $up.on('click', function () {
            scrollHBTo(0);
        });

    })(jQuery);

    /* Set The navbar btns
    ############################################################### */

    (function ($) {

        $("nav li").on('click', function () {
            //get the class of the target form the data-class
            var className = $(this).data('class');
            //get the offset 
            var offsetTop = $(className).offset().top;
            //start Scrolling
            scrollHBTo(offsetTop);
        });

    })(jQuery);
	
	
	/* To slide the sell points
    	############################################################### */
    (function ($) {
        var $span = $('<span class="down bg-main text-white"> عرض الكل </span>'),
		    $sell = $('.sell-points'),
		    $points = $(".sell-points li"),
			count = $points.length,
			show = false;
			if (count > 4) {
				for (var i = 4 ; i < count ; i++) {
					$points.eq(i).addClass("maq").hide();
				}
			}
        $span.appendTo($sell);
		$span.on("click", function () {
			$sell.find("li.maq").slideToggle(800);
			
			if (!show) {
				$(this).text("عرض اقل");
				show = true;
			} else {
				$(this).text("عرض الكل");
				show = false;
			}
		});
    })(jQuery);
	
	
	/* To kill the white space and the Uppercase letters
    ############################################################### */
	
	$("input").on("keyup", function () {
		
		var val = $(this).val();
		
		var fVal = val.toLowerCase().replace(" ", "");
		
		$(this).val(fVal);
		
	});
	

	
    //end dom ready
});

