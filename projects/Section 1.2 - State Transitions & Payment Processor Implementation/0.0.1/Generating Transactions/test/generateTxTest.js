import Client from '../Client.js';
const assert = require('assert');
import EthCrypto from 'eth-crypto';

describe('Generate Transactions', function () {
    let alice = new Client(),
        bob = new Client,
        tx,
        unsignedTx
    beforeEach(() => {
        tx = alice.generateTx(bob.wallet.address, 10, 'send')
    })

    it('should properly set contents', function () {
        unsignedTx = {
            type: 'send',
            amount: 10,
            from: alice.wallet.address,
            to: bob.wallet.address,
        }
        assert.deepEqual(tx.contents, unsignedTx)
    });

    it('should properly sign the contents', function () {
        const sig = alice.sign(unsignedTx)
        assert.equal(tx.sig, sig)
    })
})