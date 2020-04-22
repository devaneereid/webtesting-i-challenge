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
            expect(enhancer.repair({durability: 50 }).durability).toBe(100);
        });
    });

    // Test succeed(item)
    describe('.succeed(item)', () => {
        it('returns item that increases with + 1', ()  => {
            // The item's enhancement increases by 1.
            // If the item enhancement level is 20, the enhancement level is not changed.
            // The durability of the item is not changed.
            expect(succeed({ enhancement: 19 }).enhancement).toEqual(20);
        });
    });


});