$(document).ready(function () {

	$('.menu li').hover(
		function () {
			//show its submenu
			$('.submenu', this).stop(true, true).slideDown(400);
			$(this).addClass('selected');
		},

		function () {
			//hide its submenu
			$('.submenu', this).stop(true, true).slideUp(400);
			$(this).removeClass('selected');
		});

});
