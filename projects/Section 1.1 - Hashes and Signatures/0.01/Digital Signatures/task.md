## Digital Signatures

We use our private key in order to sign messages. Let's create a method function `sign(data)` in our Client class.

This function should take in `data`, use `this.toHash` calculate the `hash` of that `data`, and then use [`EthCrypto.sign`](https://github.com/pubkey/eth-crypto#sign) and your wallet's private key to sign that hash. The function should return the resulting signature.
Use `console.log` to log messages to the output. Add `console.log(this.wallet)` to figure out how to access your private key. 
See **Details** to learn why we have to hash messages before signing them.
