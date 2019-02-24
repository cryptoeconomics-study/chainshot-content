import EthCrypto from 'eth-crypto'
import Paypal from './Paypal.js'

class FTPaypal extends Paypal {
    constructor() {
        super()
        //Add backups for fault tolerance
        this.backups = []
    }
    onReceive(tx) {
        super.onReceive(tx)
        for (let backup in this.backups) {
            //Send transactions to all backups
            backup.onReceive(tx)
        }
    }
}

export default FTPaypal;