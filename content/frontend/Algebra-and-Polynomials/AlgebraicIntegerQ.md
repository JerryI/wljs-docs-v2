---
title: AlgebraicIntegerQ
---

`AlgebraicIntegerQ[a]` yields `True` if a is an algebraic integer, and yields `False` otherwise.

## Examples

Test if a number is an algebraic integer:

```wolfram
AlgebraicIntegerQ[Sqrt[2]]
(* True *)
```

Rational numbers that aren't integers are not algebraic integers:

```wolfram
AlgebraicIntegerQ[1/2]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AlgebraicIntegerQ.html) for more details.