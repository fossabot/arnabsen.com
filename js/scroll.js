//scroll to section
$(document).ready(function(){
	//scroll to section
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target
			|| $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body')
				.animate({scrollTop: targetOffset}, 800);
				return false;
			}
		}
	});
	
	//fade resume icons
	$('.fadeMe').stop().hover(
	function() {
		$(this).stop().fadeTo('fast', 1);
    }, function() {
        $(this).stop().fadeTo('fast', 0.5);
	});
});


