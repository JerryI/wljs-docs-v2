# ListLogLinearPlot

`ListLogLinearPlot[{y1, y2, ...}]` makes a log-linear plot of the y_i, assumed to correspond to x coordinates 1, 2, ....

`ListLogLinearPlot[{{x1, y1}, {x2, y2}, ...}]` makes a log-linear plot of the specified list of x and y values.

## Examples

Log-linear plot:

```wolfram
ListLogLinearPlot[{10, 100, 1000, 10000}]
```

With coordinates:

```wolfram
data = Table[{Exp[x], x}, {x, 1, 5}];
ListLogLinearPlot[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListLogLinearPlot.html) for more details.*