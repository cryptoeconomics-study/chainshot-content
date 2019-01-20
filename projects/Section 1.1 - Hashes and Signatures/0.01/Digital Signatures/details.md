## Details

There are several reasons to sign the hash (or message digest) of a document instead of the whole document.

**For efficiency**

The signature will be much shorter and thus save time since hashing is generally much faster than signing in practice.

**For compatibility**

Messages are typically bit strings, but some signature schemes operate on other domains (such as, in the case of RSA, numbers modulo a composite number N). A hash function can be used to convert an arbitrary input into the proper format.

**For integrity**

Without the hash function, the text "to be signed" may have to be split (separated) in blocks small enough for the signature scheme to act on them directly. However, the receiver of the signed blocks is not able to recognize if all the blocks are present and in the appropriate order. 

[Source](https://en.wikipedia.org/wiki/Digital_signature#Method)


## Learn more about Digital Signatures

The digital signature algorithm used by both Ethereum and Bitcoin is ECDSA, the Elliptical Curve Digital Signature Algorithm. If you'd like to learn the underlying math behind how this algorithm works *(**not** for the light of heart)*, we'd suggest this [tutorial by Jimmy Song](https://www.youtube.com/watch?v=e6voIwB-An4) (est. completion time **~3 hours**).