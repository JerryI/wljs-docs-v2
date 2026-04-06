---
title: CharacteristicPolynomial
---

`CharacteristicPolynomial[m, x]` gives the characteristic polynomial for the matrix m.

## Examples

Characteristic polynomial:

```wolfram
CharacteristicPolynomial[{{1, 2}, {3, 4}}, x]
(* -5 - 5 x + x^2 *)
```

Roots give eigenvalues:

```wolfram
Solve[CharacteristicPolynomial[{{1, 2}, {3, 4}}, x] == 0, x]
(* {{x -> (5 - Sqrt[33])/2}, {x -> (5 + Sqrt[33])/2}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CharacteristicPolynomial.html) for more details.