import EthCrypto from './eth-crypto.js'

class Client {
    constructor() {
        this.wallet = EthCrypto.createIdentity()
    }

    toHash(data) {
        return EthCrypto.hash.keccak256(data)
    }

    sign(message) {
        //TODO
    }
}

export default Client;

