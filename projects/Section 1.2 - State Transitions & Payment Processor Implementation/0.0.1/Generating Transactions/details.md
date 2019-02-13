## Format Specifications

Our unsigned transactions will have format: 
```
{
    type: either 'send' or ‘mint’,
    amount: amount to send
    from: address of sender,
    to: address of receiver,
}
```
Because every transaction must have an accompanying signature, a transaction will have format:
```
{
    contents: unsignedTx,
    sig: signature
}
```

Lastly, our state will be an object mapp Ethereum addresses as keys to each account state. The account state will be an object containing a `balance`and a `nonce`, both integers. Here is an example state: 

```
{
    0x129a2BF4B76f3e715E57b4B6CCE78cAf04C87465: {
        balance: 35,
        nonce: 2
    },
    0x335C34fbe2dFC889c1e181d37Cf83a7B8Acfc572:{
        balance:55,
        nonce:1
    },
    0x131836Cf31e7f36f5A48FfEb4d35FB07518D9F5C:{
        balance: 10,
        nonce: 0
    }
}
```
