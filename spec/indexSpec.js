import hello from '../src/assets/index';

describe('index', function() {
    it('prints name', function() {
        const expectedValue = 'Hello, World!';
        const actualValue = hello('World');
        expect(actualValue).toEqual(expectedValue);
    });
});
