---
title: TrigFactorList
---

`TrigFactorList[expr]` factors trigonometric functions in expr, yielding a list of lists containing trigonometric monomials and exponents.

## Examples

```wolfram
TrigFactorList[Sin[x]^2]
(* {{Sin[x], 2}} *)
```

```wolfram
TrigFactorList[Sin[x] Cos[x]]
(* {{Cos[x], 1}, {Sin[x], 1}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrigFactorList.html) for more details.*