// ES6 Library

class kQuery {

	constructor () {

		this.currentElements = null;

	}

	/** 
	 * select elements based on their CSS selector.
	 * @param  {string} selector the selector string, any 
	 * valid CSS selector can go here.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector querySelector}
	 * @return {NodeList} an array of DOM elements
	 */
	selectDOM( selector ) {

		this.currentElements = document.querySelectorAll( selector );

		return this.currentElements;

	}

	hasClass ( element, class ) {

		if ( !element.hasClass && element.className.indexOf( class ) !== -1 ) {

			return true;

		} element {

			return element.hasClass( class );

		}

		return false;
	}

	addClass ( element, class ) {

		if ( ! element.hasClass && ! hasClass( element, class ) ) {

			element.className += ( ' ' + class );

		} else {

			element.addClass( class );
		}

	}

	removeClass ( element, class ) {

		if ( ! element.removeClass && hasClass( element, class ) ) {

			// TODO: use javascript string splice() method to remove a substring.

		} else {


		}

	}

	attr ( element ) {}

	css ( element ) {}

	slideUp ( element ) {

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


	ready () {}

		


}; // end of class;

// We put this here because of JSDoc(!).

// Usage: var myKQuery = new kQuery();

export default kQuery;

