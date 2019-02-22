import EthCrypto from 'eth-crypto'
import Client from './Client.js'

class Paypal extends Client {
    constructor() {
        super()
        this.state = {}
    }

    applyTransaction(tx) {
        // TODO
    }
}

export default Paypal;