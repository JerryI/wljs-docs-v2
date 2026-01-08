---
title: FactorList
---

`FactorList[poly]` gives a list of the factors of a polynomial, together with their exponents.

## Examples

Factor list of a polynomial:

```wolfram
FactorList[x^2 - 1]
(* {{1, 1}, {-1 + x, 1}, {1 + x, 1}} *)
```

With repeated factors:

```wolfram
FactorList[(x - 1)^3 (x + 1)]
(* {{1, 1}, {-1 + x, 3}, {1 + x, 1}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FactorList.html) for more details.