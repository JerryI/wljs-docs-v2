---
title: DifferenceRoot
---

`DifferenceRoot[lde][k]` gives the holonomic sequence h(k), specified by the linear difference equation lde[h, k].

`DifferenceRoot[lde]` represents a pure holonomic sequence h.

## Examples

Define a sequence via difference equation:

```wolfram
DifferenceRoot[Function[{y, n}, {y[n + 2] == y[n + 1] + y[n], y[0] == 0, y[1] == 1}]][10]
(* 55 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DifferenceRoot.html) for more details.