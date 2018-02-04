var isActive = false;

$('.js-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
	};

	isActive = !isActive;
});

$(document).ready(function() {
	$('a[href^="#"]').click(function() {
		var hash = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1500);
		return false;
	});
});