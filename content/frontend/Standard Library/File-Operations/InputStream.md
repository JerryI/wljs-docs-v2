---
title: InputStream
---

`InputStream["name", n]` is an object that represents an input stream for functions such as Read and Find.

## Examples

Open an input stream:

```wolfram
stream = OpenRead["file.txt"];
Head[stream]
(* InputStream *)
```

Read from stream:

```wolfram
Read[stream, Word]
Close[stream]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InputStream.html) for more details.*