---
title: OutputStream
---

`OutputStream["name", n]` is an object that represents an output stream for functions such as Write.

## Examples

Open and write to stream:

```wolfram
stream = OpenWrite["test.txt"]
(* OutputStream["test.txt", 3] *)
```

Check stream status:

```wolfram
Head[stream]
(* OutputStream *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OutputStream.html) for more details.