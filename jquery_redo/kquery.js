// ES5 Library

var kQuery = ( function () {

	var currentElements = null;

		/** 
		 * select elements based on their CSS selector.
		 * @param  {string} selector the selector string, any 
		 * valid CSS selector can go here.
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector querySelector}
		 * @return {NodeList} an array of DOM elements
		 */
		function selectDOM( selector ) {

			currentElements = document.querySelectorAll( selector );

			return currentElements;

		}

		function hasClass ( element ) {}
		function addClass ( element ) {}
		function removeClass ( element ) {}

		function attr ( element ) {}

		function css ( element ) {}

		function slideUp ( element ) {

			if ( element.length !== undefined ) {

				element = element[ 0 ]; // just use first returned element

			}

			var timeoutId = setTimeout ( function () {

				var height = parseFloat( element.style.height );

				if (  height < document.body.clientHeight ) {

					element.style.height = ( height + 2 ) + 'px';

				}

			}, 10 );

		}


		function ready () {}

		return {

			selectDOM: selectDOM,

			ready: ready

		}; // end of returned object


	} // end of function

)();

var $ = kQuery;

