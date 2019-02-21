import Paypal from '../Paypal.js';
import Client from '../Client.js'
const assert = require('assert');
import EthCrypto from 'eth-crypto';

describe('Functioning Nonces', function () {
    let paypal = new Paypal()
    let alice = new Client()
    let bob = new Client()
    const tx1 = paypal.generateTx(alice.wallet.address, 100, 'mint'),
          tx2 = alice.generateTx(bob.wallet.address, 10, 'send'), 
          tx3 = alice.generateTx(bob.wallet.address, 10, 'send')
      //  tx3
    describe('generateTx in Client.js', function () {
        it('should properly set the first nonce with generateTx', function () {
            const unsignedTx = {
                type: 'send',
                amount: 10,
                from: alice.wallet.address,
                to: bob.wallet.address,
                nonce: 0
            }
            assert.deepEqual(tx2.contents, unsignedTx)
            const sig = alice.sign(unsignedTx)
            assert.equal(tx2.sig, sig)
        });

        it('should properly increment the nonce with generateTx', function () {
            const unsignedTx = {
                type: 'send',
                amount: 10,
                from: alice.wallet.address,
                to: bob.wallet.address,
                nonce: 1
            }
            assert.deepEqual(tx3.contents, unsignedTx)
            const sig = alice.sign(unsignedTx)
            assert.equal(tx3.sig, sig)
        });
    })
    describe('applyTransaction in Paypal.js', function () {
        it('should correctly set nonce of a new sender', function () {
            paypal.applyTransaction(tx1)
            assert.deepEqual(paypal.state[paypal.wallet.address], 
                {
                    balance: 0,
                    nonce: 1
                })
        })
        it('should correctly set nonce of a new receiver', function () {
            assert.deepEqual(paypal.state[alice.wallet.address], 
                {
                    balance: 100,
                    nonce: 0
                })
        })

        it('should not apply future nonce transactions', function () {
            paypal.applyTransaction(tx3)
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

        it('should apply valid nonce transactions', function () {
            paypal.applyTransaction(tx2)
            paypal.applyTransaction(tx3)
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

        it('should not apply past nonce transactions', function () {
            paypal.applyTransaction(tx2)
            paypal.applyTransaction(tx3)
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
})