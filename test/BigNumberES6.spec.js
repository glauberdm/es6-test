import 'babel-polyfill'
import {toBigNumber} from '../lib/BigNumberES6'
import {expect} from 'chai'

describe('ES6 Test', () => {
    describe('BigNumberES6', () => {
        it('Should convert number to BigNumber (bignumber.js)', () => {
            let BigNumber = toBigNumber(10)

            let expectedBigNumber = {s: 1, e: 1, c: [ 10 ] }

            expect(BigNumber).to.be.deep.include(expectedBigNumber)
        });
    });
});