---
title: ByteArrayToString
---

`ByteArrayToString[ba]` returns a string by decoding the data in the byte array ba, assuming UTF-8 encoding.

`ByteArrayToString[ba,"encoding"]` interprets the data in the specified character encoding.

## Examples

Convert a byte array to a string:

```wolfram
ByteArrayToString[ByteArray[{72, 101, 108, 108, 111}]]
(* "Hello" *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ByteArrayToString.html) for more details.