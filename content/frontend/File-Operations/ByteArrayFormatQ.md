---
title: ByteArrayFormatQ
---

`ByteArrayFormatQ[ba, "fmt"]` gives True if the ByteArray object ba might be imported as format "fmt" and gives False otherwise.

`ByteArrayFormatQ[ba, {fmt1, fmt2, ...}]` gives True if ba might be imported as one of "fmti".

## Examples

Check byte array format:

```wolfram
ByteArrayFormatQ[ByteArray[{137, 80, 78, 71}], "PNG"]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ByteArrayFormatQ.html) for more details.*