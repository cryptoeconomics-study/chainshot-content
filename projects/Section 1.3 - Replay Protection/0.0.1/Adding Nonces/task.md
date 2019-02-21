## Adding Nonces

Hopefully Karl's lecture gave you a good understanding of why we need to add `nonces` to our transactions to prevent *Replay Attacks*! 

To use nonces in `Client.js`, you will need to:
* Initialize `this.nonce` to 0 in the constructor
    * Note: we want our first generated transaction to have nonce 0
* Add a `nonce` property to our `unsignedTx` in `generateTx`. 
* `this.nonce` should increment after every `generateTx` call

To use nonces in `applyTransaction` of `Paypal.js`, you will need to:
* In addition to `balance`, track everybody's `nonce` in `this.state`
* `nonce` is initialized to 0 for new accounts. 
* Do nothing to the state if the `nonce` of `tx` is incorrect
* Increment the transaction sender's `nonce` after applying a transaction successfully
* If the transaction sender doesn't exist in `this.state`, we will need to add them to increment their nonce!

> *Fun Fact*: The term *Nonce* stands for "**number** that can be used just **once**"