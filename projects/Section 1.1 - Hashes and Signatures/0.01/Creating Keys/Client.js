import EthCrypto from 'eth-crypto'

class Client {
    constructor() {
        this.wallet = EthCrypto.createIdentity()
    }

    toHash(data) {
        return EthCrypto.hash.keccak256(data)
    }
}

export default Client;

