$(document).ready(function() {
	$('.donate-box').click(function(){
		$('.donate-page').fadeIn();
	});
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$('.donate-page').fadeOut();
		}
	});
});