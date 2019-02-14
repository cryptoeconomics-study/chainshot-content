import Paypal from '../Paypal.js';
const assert = require('assert');
import EthCrypto from 'eth-crypto';

describe('Paypal Constructor', function () {
    const paypal = new Paypal()
    const genesis = {
        [paypal.wallet.address]: {
            balance: 0
        }
    }
    it('should properly set this.state', function () {
        assert.deepEqual(paypal.state, genesis)
    });
    it('should properly set this.transactions', function () {
        assert.deepEqual(paypal.transactions, [])
    })
})