## Verifying Signatures

Digital Signatures allow anyone to use someone's address to verify that that used their private key to sign a message. If someone sends us a signed message, we'd like our client to be able to verify that their signature is valid.

Write a verify function that takes in 3 parameters:

1. Sender's signature
2. Hash of the sender's message
3. Sender's Ethereum address 

This function should return true if the signature is valid and false if it is not. 

> *Hint*: You can use `EthCrypto.recover` to recover an Ethereum address from a `signature` and `message hash`. See "Details" to learn how this function works.


