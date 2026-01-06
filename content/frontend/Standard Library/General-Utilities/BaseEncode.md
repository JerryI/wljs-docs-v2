---
title: BaseEncode
---

`BaseEncode[ba]` encodes the byte array ba as a Base64 string.

`BaseEncode[ba, "encoding"]` encodes using the specified encoding.

## Examples

Encode to Base64:

```wolfram
BaseEncode[ByteArray[{72, 101, 108, 108, 111}]]
(* "SGVsbG8=" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BaseEncode.html) for more details.*