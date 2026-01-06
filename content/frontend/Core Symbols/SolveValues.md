# SolveValues

`SolveValues[expr, vars]` gives the values of vars determined by the solutions of the system expr.

`SolveValues[expr, vars, dom]` uses solutions over the domain dom. Common choices are Reals, Integers, and Complexes.

## Examples

Get solution values directly:

```wolfram
SolveValues[x^2 == 4, x]
(* {-2, 2} *)
```

Solve over integers:

```wolfram
SolveValues[x^2 < 10, x, Integers]
(* {-3, -2, -1, 0, 1, 2, 3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SolveValues.html) for more details.*