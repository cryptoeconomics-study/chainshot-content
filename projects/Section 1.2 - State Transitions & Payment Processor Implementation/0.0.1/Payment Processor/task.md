## Implementing our Payment Processor

Now that we have a `Client` that can create and sign transactions, we want to build a `Paypal` class to store the state of everyone’s addresses and balances! We’ve created a new `Paypal` class for you that extends the `Client` class.

Our `Paypal` client must maintain the state of how much money everyone in the system has.
Our constructor should set `this.state` to the `genesis`, which in our case will just be:
```
{
    [this.wallet.address]: {
        balance: 0
    }
}
```
Our `Paypal` client should also store an array of all transactions it receives in `this.transactions`, which should be initialized as an empty array.



