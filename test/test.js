'use strict';

// MODULES //

var tape = require( 'tape' );
var MAX_FLOAT64 = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof MAX_FLOAT64, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is equal to the max double-precision float-point number', function test( t ) {
	t.equal( MAX_FLOAT64, Math.pow(2,1023) * (2-Math.pow(2,-52)), 'equals max value' );
	t.equal( MAX_FLOAT64, Number.MAX_VALUE, 'equals max value (Number object)' );
	t.end();
});
