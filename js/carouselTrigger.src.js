DO.Subscribe('app:ready', function(e, $) {
	"use strict";

	$('.carousel').each(function () {
		$(this).Rubik({
			autoStart: $(this).data('autostart'),
			startAt: $(this).data('startat'),
			hasPager: $(this).data('haspager')
		});
	});

});

DO.Subscribe(['app:loaded', 'app:css_loaded'], function(e, $) {
	"use strict";

	$('.carousel').each(function() {
		var rubik = $(this).data('Rubik');
		if (rubik) {
			rubik.resize();
		}
	});

});