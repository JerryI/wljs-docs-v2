# ListLogLogPlot

`ListLogLogPlot[{y1, y2, ...}]` makes a log-log plot with logarithmic scales on both axes.

## Examples

Log-log plot:

```wolfram
data = Table[{n, n^2}, {n, 1, 100}];
ListLogLogPlot[data]
```

Power law data:

```wolfram
ListLogLogPlot[Table[{x, x^1.5}, {x, 1, 1000, 10}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListLogLogPlot.html) for more details.*