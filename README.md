<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# gswap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Interchange two vectors.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-gswap
```

</section>

<section class="usage">

## Usage

```javascript
var gswap = require( '@stdlib/blas-base-gswap' );
```

#### gswap( N, x, strideX, y, strideY )

Interchanges vectors `x` and `y`.

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

gswap( x.length, x, 1, y, 1 );
// x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
// y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function has the following parameters:

-   **N**: number of values to swap.
-   **x**: first input array.
-   **strideX**: index increment for `x`.
-   **y**: second input array.
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine how values from `x` and `y` are accessed at runtime. For example, to swap in reverse order every other value in `x` with the first `N` elements of `y`,

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var y = [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];

gswap( 3, x, -2, y, 1 );
// x => [ 9.0, 2.0, 8.0, 4.0, 7.0, 6.0 ]
// y => [ 5.0, 3.0, 1.0, 10.0, 11.0, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

// Swap in reverse order every other value from `x1` with `y1`...
gswap( 3, x1, -2, y1, 1 );
// x0 => <Float64Array>[ 1.0, 12.0, 3.0, 11.0, 5.0, 10.0 ]
// y0 => <Float64Array>[ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ]
```

#### gswap.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Interchanges vectors `x` and `y` using alternative indexing semantics.

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

gswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
// x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
// y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to swap every other value in `x` starting from the second value with the last `N` elements in `y` where `x[i] = y[n]`, `x[i+2] = y[n-1]`,...,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

gswap.ndarray( 3, x, 2, 1, y, -1, y.length-1 );
// x => <Float64Array>[ 1.0, 12.0, 3.0, 11.0, 5.0, 10.0 ]
// y => <Float64Array>[ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `x` and `y` unchanged.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/complex64`][@stdlib/array/complex64]).
-   `gswap()` corresponds to the [BLAS][blas] level 1 function [`dswap`][dswap] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`dswap`][@stdlib/blas/base/dswap], [`sswap`][@stdlib/blas/base/sswap], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array-filled-by' );
var gswap = require( '@stdlib/blas-base-gswap' );

var x = filledarrayBy( 10, 'float64', discreteUniform( 0, 500 ) );
console.log( x );

var y = filledarrayBy( 10, 'float64', discreteUniform( 0, 255 ) );
console.log( y );

// Swap elements in `x` and `y` starting from the end of `y`:
gswap( x.length, x, 1, y, -1 );
console.log( x );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/dswap`][@stdlib/blas/base/dswap]</span><span class="delimiter">: </span><span class="description">interchange two double-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/base/gcopy`][@stdlib/blas/base/gcopy]</span><span class="delimiter">: </span><span class="description">copy values from x into y.</span>
-   <span class="package-name">[`@stdlib/blas/base/sswap`][@stdlib/blas/base/sswap]</span><span class="delimiter">: </span><span class="description">interchange two single-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/gswap`][@stdlib/blas/gswap]</span><span class="delimiter">: </span><span class="description">interchange two vectors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-gswap.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-gswap

[test-image]: https://github.com/stdlib-js/blas-base-gswap/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/blas-base-gswap/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-gswap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-gswap?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-gswap.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-gswap/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-gswap/main/LICENSE

[blas]: http://www.netlib.org/blas

[dswap]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/blas/base/dswap]: https://github.com/stdlib-js/blas-base-dswap

[@stdlib/blas/base/sswap]: https://github.com/stdlib-js/blas-base-sswap

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

<!-- <related-links> -->

[@stdlib/blas/base/gcopy]: https://github.com/stdlib-js/blas-base-gcopy

[@stdlib/blas/gswap]: https://github.com/stdlib-js/blas-gswap

<!-- </related-links> -->

</section>

<!-- /.links -->
