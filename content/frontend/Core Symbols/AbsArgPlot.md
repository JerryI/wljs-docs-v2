# AbsArgPlot

`AbsArgPlot[f, {x, xmin, xmax}]` generates a plot of `Abs[f]` colored by `Arg[f]` as a function of x from xmin to xmax.

`AbsArgPlot[{f1, f2, ...}, {x, xmin, xmax}]` plots several functions.

## Examples

Plot the absolute value of a complex function colored by its argument:

```wolfram
AbsArgPlot[Gamma[x], {x, -4, 4}]
```

Plot multiple complex functions:

```wolfram
AbsArgPlot[{Zeta[x], Gamma[x]}, {x, -4, 4}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AbsArgPlot.html) for more details.*