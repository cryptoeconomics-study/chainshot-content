## State Transition Function

Here comes the meat of the protocol. We have our state and we can generate our transactions. Now we need to create our state transition function,
```
 applyTransaction(transaction) {
     //apply transaction to this.state
 }
```
This function applies a transaction to our Paypal client's state.
Things to check for: 
* Valid signature on the transaction
* If the address we're sending to is not already in the state, create a new entry in the state.

For `"spend"` transactions,
* If sender doesn't have enough money, throw an `Error`

For `"mint"` transactions,
* Doesn't decrease balance of sender
* If the sender is not Paypal, throw an `Error`

