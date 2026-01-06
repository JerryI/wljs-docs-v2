---
title: EchoLabel
---

`EchoLabel[label][expr]` prints expr prepending label and returns expr.

## Examples

Print with label:

```wolfram
EchoLabel["result: "][42]
(* prints: result: 42, returns 42 *)
```

In a pipeline:

```wolfram
Range[5] // EchoLabel["list: "] // Total
(* prints: list: {1, 2, 3, 4, 5}, returns 15 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EchoLabel.html) for more details.*