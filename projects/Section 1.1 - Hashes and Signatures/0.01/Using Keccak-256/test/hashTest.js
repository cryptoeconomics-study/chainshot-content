import Client from '../Client.js';
import EthCrypto from 'eth-crypto';
const assert = require('assert');

describe('Hash', function() {
    const data = Math.random();
    const client = new Client()
    const output = client.toHash(data);
    it('should return the hash of data', function(){
        assert.equal(EthCrypto.hash.keccak256(data), output);
        // assert(true)
    });
})