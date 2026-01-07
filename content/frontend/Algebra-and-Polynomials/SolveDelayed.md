---
title: SolveDelayed
---

`SolveDelayed` is an obsolete option to `NDSolve`. The option `"EquationSimplification"` should be used instead.

## Examples

```wolfram
(* Use "EquationSimplification" instead *)
NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 1}, 
  Method -> {"EquationSimplification" -> "Residual"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SolveDelayed.html) for more details.*