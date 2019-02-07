import EthCrypto from './eth-crypto.js'

class Client {
    constructor() {
        this.wallet = EthCrypto.createIdentity()
    }

    toHash(data) {
        return EthCrypto.hash.keccak256(data)
    }

    sign(message) {
        messageHash = toHash(message)
        return EthCrypto.sign(
            this.wallet.privateKey,
            messageHash
        )
    }

    verify(signature, messageHash, address) {
        const signer = EthCrypto.recover(signature, messageHash)
        return signer === address
    }
}

export default Client;

