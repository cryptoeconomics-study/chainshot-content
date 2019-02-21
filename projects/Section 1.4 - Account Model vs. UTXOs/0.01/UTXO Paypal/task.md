## Paypal with UTXOs

We’re not going to write a function to generate TXOs, since it’s not actually too easy. If we want a transaction spending two inputs from Alice and Bob to one output, we will need signatures from both Alice and Bob, which will require some communication between clients. To make things easier, we’ve already generated some example transactions that follow the UTXO format that you can view in **Details**.  

Re-write the `applyTransaction` method of `Paypal.js`


