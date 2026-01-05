# PlotLegends

`PlotLegends` is an option for plot functions that specifies what legends to use.

## Examples

```wolfram
Plot[{Sin[x], Cos[x]}, {x, 0, 2 Pi}, PlotLegends -> {"Sin", "Cos"}]
(* plot with labeled legend *)
```

```wolfram
Plot[{x, x^2, x^3}, {x, 0, 1}, PlotLegends -> "Expressions"]
(* automatically uses expressions as legend labels *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlotLegends.html) for more details.*