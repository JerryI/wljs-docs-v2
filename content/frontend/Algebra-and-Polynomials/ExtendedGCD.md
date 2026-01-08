---
title: ExtendedGCD
---

`ExtendedGCD[n1, n2, ...]` gives the extended greatest common divisor of the integers ni, including coefficients for expressing the GCD as a linear combination.

## Examples

Find extended GCD:

```wolfram
ExtendedGCD[12, 8]
(* {4, {1, -1}} *)
```

This means 4 = 12×1 + 8×(-1).

Multiple arguments:

```wolfram
ExtendedGCD[15, 10, 6]
(* {1, {1, -1, -1}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExtendedGCD.html) for more details.*