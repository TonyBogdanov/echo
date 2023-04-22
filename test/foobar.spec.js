const { describe, test, expect } = require( '@jest/globals' );

describe( 'foo', () => {
    test( 'bar', () => expect( 1 ).toBe( 1 ) );
} );
