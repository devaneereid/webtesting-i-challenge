const enhancer = require('./enhancer.js');
// test away!
const { repair, succeed, fail, get } = require('./enhancer.js');

describe('enhancer.js', () => {
    // Tests All 
    it('should run all tests without errors', () => {
        expect(true).toBeTruthy();
    });

    // Test repair(item) 
    describe('.repair(item)', () => {
        it('returns new item durability restored to 100', () => {
            // The item's durability it's a number from 0 to 100.
            expect(repair({durability: 50 }).durability).toBe(100);
        });
    });


});