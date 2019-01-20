## Digital Signature

We use our private key in order to sign messages. Let's create a method function `sign(data)` in our Client class.

This function should take in `data`, use `this.toHash` calculate the `hash` of that `data`, and then use `EthCrypto.sign` and your wallet's private key to sign that hash. The function should return the resulting signature. See **Details** to learn why we have to hash messages before signing them.

> *Hint*: You can use `console.log` to log messages to the output. This could be helpful in figuring out how to access our private key from `this.wallet`
