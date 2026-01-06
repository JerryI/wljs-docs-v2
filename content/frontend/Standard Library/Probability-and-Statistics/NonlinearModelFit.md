---
title: NonlinearModelFit
---

`NonlinearModelFit[data, form, params, x]` fits data to a nonlinear model with statistical analysis.

## Examples

Fit to exponential model:

```wolfram
data = Table[{x, 5 Exp[-x/3] + RandomReal[0.2]}, {x, 0, 10, 0.5}]

nlm = NonlinearModelFit[data, a Exp[-x/b], {a, b}, x]

(* Best fit function *)
nlm["BestFit"]

(* Parameter table with statistics *)
nlm["ParameterTable"]

(* Plot fit with data *)
Show[ListPlot[data], Plot[nlm[x], {x, 0, 10}, PlotStyle -> Red]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NonlinearModelFit.html) for more details.*