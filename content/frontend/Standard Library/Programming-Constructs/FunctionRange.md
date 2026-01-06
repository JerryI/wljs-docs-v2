---
title: FunctionRange
---

`FunctionRange[f, x, y]` finds the range of the real function f of variable x, returning the result in terms of y.

`FunctionRange[f, x, y, dom]` considers f in the domain dom.

## Examples

Range of a quadratic:

```wolfram
FunctionRange[x^2, x, y]
(* y >= 0 *)
```

Range of sine:

```wolfram
FunctionRange[Sin[x], x, y, Reals]
(* -1 <= y <= 1 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionRange.html) for more details.*