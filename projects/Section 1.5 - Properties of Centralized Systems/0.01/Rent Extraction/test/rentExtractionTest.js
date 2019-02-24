import Paypal from '../Paypal.js';
import Client from '../Client.js'
const assert = require('assert');
import EthCrypto from 'eth-crypto';

describe('Rent Extraction', function () {
    let paypal = new Paypal()
    let alice = new Client()
    let bob = new Client()
    const tx1 = paypal.generateTx(alice.wallet.address, 100, 'mint'),
        tx2 = alice.generateTx(bob.wallet.address, 10, 'send'),
        tx3 = alice.generateTx(bob.wallet.address, 10, 'send')
    it('should not extract rent under 100 users', function () {
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
    it('should extract $1 fees when over 100 users', function () {
        for (let i = 0; i <= 100; i++) {
             paypal.state['0x' + i] = { balance: 0, nonce: 0 } 
        }
        paypal.onReceive(tx3)
        assert.deepEqual(
            paypal.state[alice.wallet.address], 
            {balance: 79, nonce: 2}
        )
    })
})