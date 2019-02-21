## Format Guide

##

### Example state

```
{  
    outputs: [
        {
            value: 10,
            owner: 0x17a2,
        },
        {
            value: 500,
            owner: 0xa11ce,
        },
        {
            value: 500,
            owner: 0xb0b,
        }
    ], 
    is_spent: [1, 0, 0]
}
```

### Transaction format
```
{
  contents: {
    list of inputs,
    list of outputs
  },
  list of input signatures
}

```

** Example TX**
```
{  
    contents: {
        inputs: [1, 2],
        outputs: [
            {value: 25, owner: accounts.jing.address},
            {value: 25, owner: accounts.aparna.address},
            {value: 50, owner: accounts.paypal.address}
        ]
    }, 
    sigs: [

    ]
}
```