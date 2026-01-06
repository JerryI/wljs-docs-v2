# FreeQ

`FreeQ[expr, form]` yields `True` if no subexpression in expr matches form, and `False` otherwise.

## Examples

Check if expression is free of a symbol:

```wolfram
FreeQ[x^2 + y, z]
(* True *)

FreeQ[x^2 + y, x]
(* False *)
```

With patterns:

```wolfram
FreeQ[{a, b, c}, _Integer]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FreeQ.html) for more details.*