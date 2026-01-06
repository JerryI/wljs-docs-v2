# LogLogPlot

`LogLogPlot[f, {x, xmin, xmax}]` generates a log-log plot of f as a function of x from xmin to xmax.

`LogLogPlot[{f1, f2, ...}, {x, xmin, xmax}]` plots several functions f_i.

## Examples

Log-log plot:

```wolfram
LogLogPlot[x^2, {x, 1, 100}]
```

Multiple functions:

```wolfram
LogLogPlot[{x, x^2, x^3}, {x, 1, 1000}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LogLogPlot.html) for more details.*