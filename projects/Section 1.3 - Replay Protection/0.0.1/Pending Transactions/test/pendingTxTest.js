import Paypal from '../Paypal.js';
import Client from '../Client.js'
const assert = require('assert');
import EthCrypto from 'eth-crypto';

describe('Invalid Nonce Handling', function () {
    let paypal = new Paypal()
    let alice = new Client()
    let bob = new Client()
    const tx1 = paypal.generateTx(alice.wallet.address, 100, 'mint'),
        tx2 = alice.generateTx(bob.wallet.address, 10, 'send'),
        tx3 = alice.generateTx(bob.wallet.address, 10, 'send')
    it('should call applyTransaction in onReceive', function () {
        paypal.onReceive(tx1)
        assert.deepEqual(paypal.state, {
            [alice.wallet.address]: {
                balance: 100,
                nonce: 0
            },
            [paypal.wallet.address]: {
                balance: 0,
                nonce: 1
            }
        })
    })
    it('should correctly set nonce of a new receiver', function () {
        paypal.onReceive(tx3)
        assert.deepEqual(paypal.state, {
            [alice.wallet.address]: {
                balance: 100,
                nonce: 0
            },
            [paypal.wallet.address]: {
                balance: 0,
                nonce: 1
            }
        })
        assert.deepEqual(paypal.invalidNonceTxs, {
            [alice.wallet.address]: {
                1: tx3
            }
        })
    })

    it('should fill pending transactions', function () {
        paypal.onReceive(tx2)
        assert.deepEqual(paypal.state, {
            [alice.wallet.address]: {
                balance: 80,
                nonce: 2
            },
            [paypal.wallet.address]: {
                balance: 0,
                nonce: 1
            },
            [bob.wallet.address]: {
                balance: 20,
                nonce: 0
            }
        })
    })
})