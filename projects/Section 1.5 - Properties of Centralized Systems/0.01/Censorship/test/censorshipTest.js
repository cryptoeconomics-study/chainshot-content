import Paypal from '../Paypal.js';
import Client from '../Client.js'
const assert = require('assert');
import EthCrypto from 'eth-crypto';

describe('Censorship', function () {
    let paypal = new Paypal()
    let alice = new Client()
    let bob = new Client()
    const tx1 = paypal.generateTx(alice.wallet.address, 100, 'mint'),
        tx2 = alice.generateTx(bob.wallet.address, 10, 'send'),
        tx3 = alice.generateTx(bob.wallet.address, 10, 'send')
    it('should allow transactions from non-blacklisted addresses', function () {
        paypal.onReceive(tx1)
        paypal.onReceive(tx2)
        assert.deepEqual(paypal.state, {
            [alice.wallet.address]: {
                balance: 90,
                nonce: 1
            },
            [paypal.wallet.address]: {
                balance: 0,
                nonce: 1
            },
            [bob.wallet.address]: {
                balance: 10,
                nonce: 0
            }
        })
    })
    it('should throw Error if tx is from blacklisted address', function () {
        paypal.blacklist.push(alice.wallet.address)
        assert.throws(() => { paypal.onReceive(tx3) }, Error)
    })
})