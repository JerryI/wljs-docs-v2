---
title: AlgebraicUnitQ
---

`AlgebraicUnitQ[a]` yields `True` if a is an algebraic unit, and yields `False` otherwise.

## Examples

Test if a number is an algebraic unit:

```wolfram
AlgebraicUnitQ[1 + Sqrt[2]]
(* True *)
```

An integer other than ±1 is not an algebraic unit:

```wolfram
AlgebraicUnitQ[2]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AlgebraicUnitQ.html) for more details.*