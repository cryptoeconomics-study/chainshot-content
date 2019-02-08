import Client from '../Client.js'
import EthCrypto from 'eth-crypto'
const assert = require('assert')

describe('Digital Signatures', function() {
    const client = new Client()
    const message = Math.random()
    const signature = EthCrypto.sign(
        client.wallet.privateKey,
        EthCrypto.hash.keccak256(message)
    )
    it('should set successfully sign messages', function() {
        assert.equal(
            client.sign(message),
            signature
        )
    });
})

