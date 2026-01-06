---
title: SquareFreeQ
---

`SquareFreeQ[expr]` gives True if expr is a square-free polynomial or number, and False otherwise.

`SquareFreeQ[expr, vars]` gives True if expr is square free with respect to the variables vars.

## Examples

Test if a number is square-free:

```wolfram
SquareFreeQ[30]
(* True *)
```

Test a non-square-free number:

```wolfram
SquareFreeQ[12]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SquareFreeQ.html) for more details.*