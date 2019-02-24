## Rent Extraction

Rent extraction is one of the most dangerous properties of centralized systems, especially when they are run by for-profit companies.

Essentially, once a company has a monopoly or something close to one, they can extract rent from all their users. This "rent" could be anything from increasing prices to showing more ads.

To demonstrate rent extraction, let's add a $1 processing fee on every transaction if we have over 100 users. In order to check how many users we have, we'll just use the number of address keys in `this.state`, and in order to add the transaction fee, we'll just subtract `tx.contents.amount + 1` from the sender of all `spend` transactions.



