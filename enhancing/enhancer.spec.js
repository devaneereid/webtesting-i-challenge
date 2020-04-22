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
            expect(repair({ durability: 50 }).durability).toBe(100);
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

     // Test fail(item)
     describe('.fail(item)', () => {
        it('returns an object that decreases by 5, when less than 15', () => {
            // If the item's enhancement is less than 15, the durability of the item is decreased by 5.
            expect(fail({ enhancement: 12, durability: 12 }).durability).toBe(7);
        });

        it('returns an object that decreases by 10, when 15 or more', () => {
             // If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
            expect(fail({ enhancement: 15, durability: 10 }).durability).toBe(0);
        });
        
        it('returns an object that decreases by 1, when enhancement level is 16 or greater', () => {
            // If the item's enhancement level is greater than 16, the enhancement level decreases by 1.
            expect(fail({ enhancement: 18 }).enhancement).toBe(17);
        });
    });

});
