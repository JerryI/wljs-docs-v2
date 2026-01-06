# PlotRange

`PlotRange` is an option that specifies the coordinate range to include in a plot. Use `All` to show everything, or explicit ranges.

## Examples

Control plot range:

```wolfram
Plot[Tan[x], {x, 0, Pi}, PlotRange -> {-10, 10}]

(* Specify both x and y ranges *)
Plot[Sin[x], {x, 0, 4 Pi}, PlotRange -> {{0, 2 Pi}, {-1, 1}}]

(* Show all data *)
ListPlot[data, PlotRange -> All]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlotRange.html) for more details.*