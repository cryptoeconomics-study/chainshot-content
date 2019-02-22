## Format Guide

### Example state

```
{  
    txOutputs: [
        {
            value: 1000,
            owner: 0x123,
        },
        {
            value: 500,
            owner: 0xabc,
        },
        {
            value: 500,
            owner: 0xdef,
        }
    ], 
    isSpent: [1, 0, 0]
}
```
The values of the isSpent array correspond to each TX in the txOutputs array. 1 = spent, 0 = unspent.

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
            {value: 250, owner: 0xabc},
            {value: 250, owner: 0x123},
            {value: 500, owner: 0x456}
        ]
    }, 
    sigs: [
        signature1,
        signature2
    ]
}
```
The elements in the `inputs` array correspond to the index in the `txOutputs` array of the `state`. In this example, inputs 1 and 2 correspond to `txOutputs[1]` and `txOutputs[2]`