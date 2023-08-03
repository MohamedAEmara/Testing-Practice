const capitalize = require('../src/capitalize');

test('Capitalize all letters small', () => {
    expect(capitalize('aavcddgddcaxgfp')).toBe('AAVCDDGDDCAXGFP');
});



test('Capitalize all letters Capital', () => {
    expect(capitalize('ASDFLLKCDAFLDKJFDAEWFCMZCMCMMDFLSJFEERUQ')).toBe('ASDFLLKCDAFLDKJFDAEWFCMZCMCMMDFLSJFEERUQ');
})


test('Capitalize some small and some capital', () => {
    expect(capitalize('asdfkjcADFQERHlkcDffDfdflkjdsFFjadlsfeEFX')). toBe('ASDFKJCADFQERHLKCDFFDFDFLKJDSFFJADLSFEEFX');
})


test('Capitalize single small letter', () => {
    expect(capitalize('z')).toBe('Z');
});


test('Capitalize single capital letter', () => {
    expect(capitalize('X')).toBe('X');
});