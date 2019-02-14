import EthCrypto from 'eth-crypto'
import Client from './Client.js'

class Paypal extends Client {
    constructor(genesis) {
        super()
        this.state = {
            [this.wallet.address]: {
                balance: 0
            }
        }
        this.transactions = []
    }
}

export default Paypal;