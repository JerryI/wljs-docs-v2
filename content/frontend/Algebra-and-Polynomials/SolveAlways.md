---
title: SolveAlways
---

`SolveAlways[eqns, vars]` gives the values of parameters that make the equations eqns valid for all values of the variables vars.

## Examples

Find parameters that make an equation always true:

```wolfram
SolveAlways[a x^2 + b x + c == (x - 1)(x - 2), x]
(* {{a -> 1, b -> -3, c -> 2}} *)
```

Solve for coefficients of a polynomial identity:

```wolfram
SolveAlways[a + b x + c x^2 == 3 + 2 x - x^2, x]
(* {{a -> 3, b -> 2, c -> -1}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SolveAlways.html) for more details.