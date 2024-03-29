/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex128Array = require( '@stdlib/array-complex128' );
var reinterpret128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var gcopy = require( '@stdlib/blas-base-gcopy' );
var gswap = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gswap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gswap.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the function interchanges vectors `x` and `y`', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 6.0, 7.0 ];

	xe = y.slice();
	ye = x.slice();

	gswap( x.length, x, 1, y, 1 );

	t.deepEqual( x, xe, 'returns expected value' );
	t.notEqual( x, xe, 'different references' );

	t.deepEqual( y, ye, 'returns expected value' );
	t.notEqual( y, ye, 'different references' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	xe = y.slice();
	ye = x.slice();

	gswap( x.length, x, 1, y, 1 );

	t.deepEqual( x, xe, 'returns expected value' );
	t.notEqual( x, xe, 'different references' );

	t.deepEqual( y, ye, 'returns expected value' );
	t.notEqual( y, ye, 'different references' );

	t.end();
});

tape( 'the function interchanges vectors `x` and `y` (accessors)', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = new Complex128Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Complex128Array( [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ] );

	xe = gcopy( y.length, y, 1, new Complex128Array( y.length ), 1 );
	ye = gcopy( x.length, x, 1, new Complex128Array( x.length ), 1 );

	gswap( x.length, x, 1, y, 1 );

	t.deepEqual( reinterpret128( x, 0 ), reinterpret128( xe, 0 ), 'returns expected value' );
	t.deepEqual( reinterpret128( y, 0 ), reinterpret128( ye, 0 ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	];
	N = 3;

	gswap( N, x, 2, y, 1 );

	xe = [ 6.0, 2.0, 7.0, 4.0, 8.0 ];
	ye = [ 1.0, 3.0, 5.0, 9.0, 10.0 ];

	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = new Complex128Array([
		0.0, // 0
		1.0, // 0
		2.0,
		3.0,
		4.0, // 1
		5.0  // 1
	]);
	y = new Complex128Array([
		6.0, // 0
		7.0, // 0
		8.0, // 1
		9.0, // 1
		10.0,
		11.0
	]);
	N = 2;

	gswap( N, x, 2, y, 1 );

	xe = new Float64Array( [ 6.0, 7.0, 2.0, 3.0, 8.0, 9.0 ] );
	ye = new Float64Array( [ 0.0, 1.0, 4.0, 5.0, 10.0, 11.0 ] );

	t.deepEqual( reinterpret128( x, 0 ), xe, 'returns expected value' );
	t.deepEqual( reinterpret128( y, 0 ), ye, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	y = [
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0 // 2
	];
	N = 3;

	gswap( N, x, 1, y, 2 );

	xe = [ 6.0, 8.0, 10.0, 4.0, 5.0 ];
	ye = [ 1.0, 7.0, 2.0, 9.0, 3.0 ];

	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = new Complex128Array([
		0.0, // 0
		1.0, // 0
		2.0, // 1
		3.0, // 1
		4.0,
		5.0
	]);
	y = new Complex128Array([
		6.0,  // 0
		7.0,  // 0
		8.0,
		9.0,
		10.0, // 1
		11.0  // 1
	]);
	N = 2;

	gswap( N, x, 1, y, 2 );

	xe = new Float64Array( [ 6.0, 7.0, 10.0, 11.0, 4.0, 5.0 ] );
	ye = new Float64Array( [ 0.0, 1.0, 8.0, 9.0, 2.0, 3.0 ] );

	t.deepEqual( reinterpret128( x, 0 ), xe, 'returns expected value' );
	t.deepEqual( reinterpret128( y, 0 ), ye, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the second input array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	out = gswap( x.length, x, 1, y, 1 );

	t.strictEqual( out, y, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves both input arrays unchanged', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	xe = x.slice();
	ye = y.slice();

	gswap( -1, x, 1, y, 1 );
	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	gswap( 0, x, 1, y, 1 );
	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	];
	N = 3;

	gswap( N, x, -2, y, -1 );

	xe = [ 6.0, 2.0, 7.0, 4.0, 8.0 ];
	ye = [ 1.0, 3.0, 5.0, 9.0, 10.0 ];

	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = new Complex128Array([
		0.0, // 1
		1.0, // 1
		2.0,
		3.0,
		4.0, // 0
		5.0  // 0
	]);
	y = new Complex128Array([
		6.0,  // 1
		7.0,  // 1
		8.0,  // 0
		9.0,  // 0
		10.0,
		11.0
	]);
	N = 2;

	gswap( N, x, -2, y, -1 );

	xe = new Float64Array( [ 6.0, 7.0, 2.0, 3.0, 8.0, 9.0 ] );
	ye = new Float64Array( [ 0.0, 1.0, 4.0, 5.0, 10.0, 11.0 ] );

	t.deepEqual( reinterpret128( x, 0 ), xe, 'returns expected value' );
	t.deepEqual( reinterpret128( y, 0 ), ye, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	];
	y = [
		7.0,  // 2
		8.0,  // 1
		9.0,  // 0
		10.0,
		11.0,
		12.0
	];
	N = 3;

	gswap( N, x, 2, y, -1 );

	xe = [ 9.0, 2.0, 8.0, 4.0, 7.0, 6.0 ];
	ye = [ 5.0, 3.0, 1.0, 10.0, 11.0, 12.0 ];

	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var x0;
	var y0;
	var x1;
	var y1;
	var xe;
	var ye;
	var N;

	// Initial arrays...
	x0 = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	y0 = new Float64Array([
		7.0,
		8.0,
		9.0,
		10.0, // 0
		11.0, // 1
		12.0  // 2
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element

	N = 3;

	gswap( N, x1, -2, y1, 1 );

	xe = new Float64Array( [ 1.0, 12.0, 3.0, 11.0, 5.0, 10.0 ] );
	ye = new Float64Array( [ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ] );

	t.deepEqual( x0, xe, 'returns expected value' );
	t.deepEqual( y0, ye, 'returns expected value' );

	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently swaps elements', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var i;

	x = new Float64Array( 100 );
	y = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
	}
	xe = new Float64Array( y.length );
	gcopy( y.length, y, 1, xe, 1 );

	ye = new Float64Array( x.length );
	gcopy( x.length, x, 1, ye, 1 );

	gswap( x.length, x, 1, y, 1 );

	t.deepEqual( x, xe, 'returns expected value' );
	t.notEqual( x, xe, 'different references' );

	t.deepEqual( y, ye, 'returns expected value' );
	t.notEqual( y, ye, 'different references' );

	x = new Float64Array( 120 );
	y = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i*2;
		y[ i ] = x.length - i;
	}
	xe = new Float64Array( y.length );
	gcopy( y.length, y, 1, xe, 1 );

	ye = new Float64Array( x.length );
	gcopy( x.length, x, 1, ye, 1 );

	gswap( x.length, x, 1, y, 1 );

	t.deepEqual( x, xe, 'returns expected value' );
	t.notEqual( x, xe, 'different references' );

	t.deepEqual( y, ye, 'returns expected value' );
	t.notEqual( y, ye, 'different references' );

	t.end();
});
