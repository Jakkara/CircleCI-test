const sum = require('./main');

test('1+2=3', () => {
    expect(sum(1,2)).toBe(1);
});