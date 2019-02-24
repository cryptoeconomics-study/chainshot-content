## Fraud

When a central payment operator has control over everyone's assets, it can act maliciously.

To simulate fraudulent activity, let's write a method, `stealAllFunds()` in `Paypal.js` which will iterate through every address in `this.state`, and sum up everyone else's balances, also setting all of their balance to 0. It will then take the sum of all of that money and add it to Paypal's balance, effectively stealing everyone's funds.

