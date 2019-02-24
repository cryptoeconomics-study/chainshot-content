## Censorship

Censorship is one aspect that is inherent to centralized systems. 

Most blockchain protocols are designed to be censorship resistant.

Censorship will be very easy implement in `Paypal.js`. Initialize an empty array `this.blacklist` in your constructor that stores blacklisted addresses. If we see a transaction that is sending money from a blacklisted address, we should throw an error.
