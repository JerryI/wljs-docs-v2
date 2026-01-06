---
title: CheckAll
---

`CheckAll[expr, f]` evaluates expr and returns `f[expr, HoldComplete[control1, ...]]` where the controli expressions are aborts, throws, or other flow control commands currently being executed (but stopped by CheckAll).

## Examples

Catch a thrown value:

```wolfram
CheckAll[Throw[5], List]
(* {Null, HoldComplete[Throw[5]]} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CheckAll.html) for more details.*