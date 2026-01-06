---
title: FactorSquareFreeList
---

`FactorSquareFreeList[poly]` gives a list of square-free factors of a polynomial, together with their exponents.

## Examples

List square-free factors:

```wolfram
FactorSquareFreeList[x^4 - 2x^2 + 1]
(* {{1, 1}, {-1 + x^2, 2}} *)
```

With multiple factors:

```wolfram
FactorSquareFreeList[(x - 1)^3 (x + 2)^2]
(* {{1, 1}, {2 + x, 2}, {-1 + x, 3}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FactorSquareFreeList.html) for more details.*