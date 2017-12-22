$(document).ready(function() {
      $('.modal-trigger').leanModal() //init modal
      $(".button-collapse").sideNav(); // init sidenav
      $('.slider').slider({ // slider JSON
        indicators: true,
        autoplay: false
      });
      $('.parallax').parallax(); //init parallax
      $('.carousel').carousel({ //init carousel
        indicators: true
      });
      $('a.modal-action').on('click', function FadeEvent() { //onClick init message fade + timeout
        $('div.message').fadeIn(4000);
        setTimeout(function() {
          $('div.message').fadeOut(4000);
        }, 4000);
      });
      $('.nav-wrapper .button-collapse').on('click', function() { //onClick mobile menu remove default overlay
        if ($("#sidenav-overlay").length > 0) {
          $("#sidenav-overlay").remove();
        }
      });
      $('li.scroll a').on('click', function() { //SmoothScroll
        var $thisHref = $(this).attr('href');
        var element = $($thisHref);
        var headerHeight = $('.nav-extended').height();
        var scrollTime = 1000;
        $('html, body').animate({
          scrollTop: element.offset().top - headerHeight
        }, scrollTime);
      });
	  var image = $("img.fade-image").fadeTo(0, 0); //Project image fade in when in window view
	  $(window).scroll(function() {
	  		image.each(function() {
	        var heightOne = $(this).offset().top + $(this).height();
	        var heightTwo = $(window).scrollTop() + $(window).height();
		    	if (heightOne < heightTwo) { 
			 		$(this).fadeTo(6000,1)
					};
	        });
        });
        
        $('a[download]').one("click", function() { // Units download button message display
            var documentName = $(this).attr('title'); // = download link title attribute
            $('div.message').append("<span>"+documentName+"</span>"); // add title attribute
            $('div.message').fadeIn(4000); // fade in
            setTimeout(function() {
            $('div.message').fadeOut(4000); // fade out
            $('div.message span').remove(); // remove title attribute to avoid duplicate title name next time download is pressed
            }, 4000);
        });
    }); //Jquery Ready Close