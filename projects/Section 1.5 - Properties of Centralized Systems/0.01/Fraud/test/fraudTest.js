import Paypal from '../Paypal.js';
import Client from '../Client.js'
const assert = require('assert');
import EthCrypto from 'eth-crypto';

describe('Steal All Funds Fraud', function () {
    let paypal = new Paypal()
    let alice = new Client()
    let bob = new Client()
    const tx1 = paypal.generateTx(alice.wallet.address, 100, 'mint'),
        tx2 = alice.generateTx(bob.wallet.address, 30, 'send')
    it('should steal all funds', function () {
        paypal.onReceive(tx1)
        paypal.onReceive(tx2)
        paypal.stealAllFunds()
        assert.deepEqual(paypal.state, {
            [alice.wallet.address]: {
                balance: 0,
                nonce: 1
            },
            [paypal.wallet.address]: {
                balance: 100,
                nonce: 1
            },
            [bob.wallet.address]: {
                balance: 0,
                nonce: 0
            }
        })
    })
})