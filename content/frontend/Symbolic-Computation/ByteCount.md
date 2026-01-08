---
title: ByteCount
---

`ByteCount[expr]` gives the number of bytes used internally by the Wolfram System to store expr.

## Examples

Check memory usage of expressions:

```wolfram
ByteCount[{1, 2, 3, 4, 5}]
(* 136 *)
```

Compare memory for different types:

```wolfram
ByteCount[Range[1000]]
(* 8056 *)

ByteCount["Hello World"]
(* 104 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ByteCount.html) for more details.