---
title: ByteArray
---

`ByteArray[{b1, b2, ...}]` constructs a ByteArray object containing the byte values bi.

`ByteArray["string"]` constructs a ByteArray object by extracting byte values from a Base64-encoded string.

## Examples

Create a byte array:

```wolfram
ByteArray[{72, 101, 108, 108, 111}]
```

From Base64 string:

```wolfram
ByteArray["SGVsbG8="]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ByteArray.html) for more details.*