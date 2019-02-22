## Paypal with UTXOs

We’re not going to write a function to generate TXOs, since it’s not actually too easy. If we want a transaction spending two inputs from Alice and Bob to one output, we will need signatures from both Alice and Bob, which will require some communication between clients. To make things easier, we’ll be generating transactions outputs for you. To view the format of `state` and the transaction utputs, view **Details**.  

Re-write the `applyTransaction` method accepting the state of `Paypal.js` so that it will:
* Throw an error if the transaction does not include valid signatures in `sigs` for every owner of the `inputs` 
* Throw an error if the total value of `outputs` is not equal to the total value of `inputs`
* Throw an error if any of the `inputs` are already spent.
* All outputs are added to the state as `unspent` and all inputs are set to `spent`




