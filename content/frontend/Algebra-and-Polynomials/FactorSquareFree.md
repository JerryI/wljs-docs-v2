---
title: FactorSquareFree
---

`FactorSquareFree[poly]` pulls out any multiple factors in a polynomial, giving a product of square-free factors.

## Examples

Square-free factorization:

```wolfram
FactorSquareFree[x^4 - 2x^2 + 1]
(* (x^2 - 1)^2 *)
```

Separate repeated factors:

```wolfram
FactorSquareFree[(x - 1)^3 (x + 2)]
(* (x - 1)^3 (x + 2) *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FactorSquareFree.html) for more details.