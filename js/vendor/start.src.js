/**
 * Start any application specific calls to via ready to avoid
 * boiler place throughout the core code.
 *
 * Params:
 *	event
 */
jQuery(document).ready(function(e) {
	"use strict";

	// prevent caching of ajax GET requests in IE
	$.ajaxSetup({
		cache: false
	});

	DO.Fire('app:ready', [], true);

	$(window).on('load', function() {
		DO.Fire('app:loaded', [], true);
	});
});