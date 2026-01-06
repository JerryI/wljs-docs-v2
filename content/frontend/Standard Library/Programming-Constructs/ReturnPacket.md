---
title: ReturnPacket
---

`ReturnPacket[expr]` is a WSTP packet that contains the expression expr, the result of an `EvaluatePacket` evaluation.

## Examples

```wolfram
ReturnPacket[1 + 1]
```

```wolfram
LinkRead[link] (* May return ReturnPacket[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReturnPacket.html) for more details.*