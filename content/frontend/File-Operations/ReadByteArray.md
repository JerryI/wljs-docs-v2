---
title: ReadByteArray
---

`ReadByteArray[src]` gives the contents of src as a ByteArray object.

`ReadByteArray[src,n]` reads the first n bytes from src.

`ReadByteArray[src,term]` reads until the termination condition term is satisfied.

## Examples

Read a file as a byte array:

```wolfram
ReadByteArray["example.bin"]
```

Read only the first 100 bytes:

```wolfram
ReadByteArray["example.bin", 100]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReadByteArray.html) for more details.*