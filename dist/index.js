/** @license Apache-2.0 */

'use strict';

/**
* Calculate the Lanczos sum for the approximation of the gamma function (scaled by `exp(-g)`, where `g = 1.42845618724823`) as a single precision floating-point number.
*
* @module @stdlib/math-base-special-gamma-lanczos-sum-expg-scaledf
*
* @example
* var gammaLanczosSumExpGScaledf = require( '@stdlib/math-base-special-gamma-lanczos-sum-expg-scaledf' );
*
* var v = gammaLanczosSumExpGScaledf( 4.0 );
* // returns ~0.748
*
* v = gammaLanczosSumExpGScaledf( -1.5 );
* // returns ~0.193
*
* v = gammaLanczosSumExpGScaledf( -0.5 );
* // returns ~-0.558
*
* v = gammaLanczosSumExpGScaledf( 0.5 );
* // returns ~1.772
*
* v = gammaLanczosSumExpGScaledf( 0.0 );
* // returns Infinity
*
* v = gammaLanczosSumExpGScaledf( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
