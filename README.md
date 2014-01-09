Rubik
=====

# Responsive jQuery Carousel

## Features
* One or multiple carousel items per page
* Number of items per page defined in CSS not JS, so can be defined per breakpoint
* Carousel re-configures when number of items per page changes
* Next and Previous links generated automatically
* Page links gnerated automitcally and updated when number of pages changes (breakpoint change)
* Swipe support
* Auto scroll
* Options able to be overridden globally or on a carousel by carousel basis
* Start at first, last, middle
* Alternative easing functions can be easily added
* Concise initial markup, extra markup added by Rubik automatically

## Features lacking
* Does not do inifinite scroll,
* It's not small, replies on quite a few libraries and things
* Doesn't work with ul li markup due to the number of wrapping divs needed

## Needs
* Modernizr
* jQuery
* jQuery Transit for CSS animations rather than JS ones (https://github.com/rstacruz/jquery.transit)
* jQuery Timers (unsure where I got this one, but it's a goodie)
* Swipe (https://github.com/bradbirdsall/Swipe)
* DO (DNA's event handler wrapper)

## Markup needed

<div class="carousel clearfix">
	<div class="carousel_item">
		anything you like in here
	</div>
	<div class="carousel_item">
		anything you like in here
	</div>
</div>


## Options
* autoStart: false,
* autoStartRestartAfterWait: 0,
* autoStartWait: 6000,
* assessCallback: function() {},
* domHolderClass: 'carousel_holder',
* domInnerClass: 'carousel_items',
* domItemClass: 'carousel_item',
* domPrevClass: 'carousel_previous',
* domNextClass: 'carousel_next',
* domPageClass: 'carousel_page',
* domPagerClass: 'carousel_pager',
* hasControls: true,
* hasPager: true,
* startAt: 1,
* transitionEasing: 'swing',
* transitionSpeed: 2000,
* transitionSpeedCSS: 800
