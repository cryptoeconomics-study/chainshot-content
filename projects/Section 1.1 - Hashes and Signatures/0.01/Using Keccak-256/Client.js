import EthCrypto from 'eth-crypto'

class Client {
    constructor() {
    }

    toHash(data) {
        return EthCrypto.hash.keccak256(data)
    }
}

export default Client;

