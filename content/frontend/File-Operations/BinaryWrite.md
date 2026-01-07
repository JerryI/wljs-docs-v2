---
title: BinaryWrite
---

`BinaryWrite[channel, b]` writes a byte of data, specified as an integer from 0 to 255.

`BinaryWrite[channel, {b1, b2, ...}]` writes a sequence of bytes.

`BinaryWrite[channel, "string"]` writes the raw sequence of characters in a string.

`BinaryWrite[channel, x, type]` writes an object of the specified type.

## Examples

Write bytes to a file:

```wolfram
stream = OpenWrite["test.bin", BinaryFormat -> True];
BinaryWrite[stream, {72, 101, 108, 108, 111}];
Close[stream];
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BinaryWrite.html) for more details.*