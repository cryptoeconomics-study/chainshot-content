import Client from '../Client.js';
// import EthCrypto from 'eth-crypto';
const assert = require('assert');

describe('Wallet', function() {
    const client = new Client()
    const wallet = client.wallet;
    it('should set this.wallet', function(){
        assert(wallet)
    });
    it('should set this.wallet using createIdentity()', function () {
        assert(wallet.address && wallet.publicKey && wallet.privateKey)
    });
})