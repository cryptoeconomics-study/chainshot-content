## Verifying Signatures

Digital Signatures allow anyone to use someoneone's public key to verify their signature on a message. If someone sends us a signed message, we'd like our client to be able to verify that their signature is valid.

Write a verify function that takes in 3 parameters:
1. signature
2. message hash
3. Ethereum address

This function should return true if the signature is valid and false if it is not.


