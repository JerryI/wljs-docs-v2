---
title: Byte
---

`Byte` represents a single byte of data when used with `Read` and related functions.

## Examples

Read bytes from a stream:

```wolfram
stream = OpenRead["file.bin", BinaryFormat -> True];
Read[stream, Byte]
(* 65 *)
Close[stream];
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Byte.html) for more details.*