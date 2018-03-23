  /* # With The Name Of Allah
     # Ali Almohaya // Almo7aya  => https://fb.com/almo7aya
     # 18/6/2017    
     # Eid Sa'ed Mikrotick hotspot template */

// scrollTo function sets the scroll of body and html to a value 
function scrollHBTo(where) {
    $('html, body').animate({
        scrollTop: where
    }, 900);
};


$(function () { // document is ready let's go

    'use strict';
    /* inti nice scroll lib
    ############################################################### */
    $("html").niceScroll({
        cursorcolor: "#27364c",
        cursorwidth: "10px",
        cursorborderradius: 0,
        cursorborder: "1px solid #fff"
    });


    /* Set The up button
    ############################################################### */

    (function ($) {

        var $up = $('.top');
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
            scrollHBTo(offsetTop - 30);
        });
    })(jQuery);

    	/* To slid	/* To slide the sell points
    	############################################################### */
    (function ($) {
        var $span = $('<span class="down overlay center-text center-block pointer"> عرض الكل </span>'),
		    $sell = $('.sell-points-ul'),
		    $points = $(".sell-points-ul li"),
			count = $points.length,
			show = false,
            rows = 4;
			if (count > rows) {
				for (var i = rows ; i < count ; i++) {
					$points.eq(i).addClass("maq").hide();
				}
                $span.appendTo($sell);
			}
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

    //end dom ready
});
