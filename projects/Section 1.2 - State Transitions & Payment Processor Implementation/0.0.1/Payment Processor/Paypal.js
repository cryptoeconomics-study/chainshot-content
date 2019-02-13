import EthCrypto from 'eth-crypto'
import Client from './Client.js'

class Paypal extends Client {
    constructor(genesis) {
        super()
        this.state = genesis
        this.transactions = []
    }
}

export default Paypal;