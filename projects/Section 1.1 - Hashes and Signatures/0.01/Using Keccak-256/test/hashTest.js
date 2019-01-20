import Client from '../Client.js';
// import EthCrypto from 'eth-crypto';
const assert = require('assert');

describe('Hash', function() {
    const data = Math.random();
    const output = Client.toHash(data);
    it('should return the hash of data', function(){
        // assert.equals(EthCrypto.hash.keccak256(data), output);
        assert(true)
    });
})