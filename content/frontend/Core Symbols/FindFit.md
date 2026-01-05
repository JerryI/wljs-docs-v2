# FindFit

`FindFit[data, expr, params, vars]` finds parameter values that make `expr` best fit the data.

## Examples

Fit data to a nonlinear model:

```wolfram
data = Table[{x, 3 Exp[-0.5 x] + RandomReal[0.1]}, {x, 0, 5, 0.5}]

(* Fit exponential decay *)
FindFit[data, a Exp[-b x], {a, b}, x]
(* {a -> 3.02, b -> 0.498} *)

(* Use the result *)
model = a Exp[-b x] /. %
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindFit.html) for more details.*