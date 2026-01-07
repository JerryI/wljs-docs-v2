---
title: Apart
---

`Apart[expr]` rewrites a rational expression as a sum of terms with minimal denominators.

## Examples

Partial fraction decomposition:

```wolfram
Apart[1/(x^2 - 1)]
(* 1/(2(-1 + x)) - 1/(2(1 + x)) *)
```

```wolfram
Apart[(x + 1)/(x (x + 2))]
(* 1/(2 x) + 1/(2 (2 + x)) *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Apart.html) for more details.*