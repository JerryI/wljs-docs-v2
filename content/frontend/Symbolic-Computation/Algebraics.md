---
title: Algebraics
---

`Algebraics` represents the domain of algebraic numbers, as in x∈Algebraics.

## Examples

Test if a number is algebraic:

```wolfram
Element[Sqrt[2], Algebraics]
(* True *)
```

Solve over algebraic numbers:

```wolfram
Solve[x^2 == 2, x, Algebraics]
(* {{x -> -Sqrt[2]}, {x -> Sqrt[2]}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Algebraics.html) for more details.*