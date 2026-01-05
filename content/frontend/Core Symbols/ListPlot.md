# ListPlot

`ListPlot[{y1, ..., yn}]` plots regularly spaced points.

`ListPlot[{{x1, y1}, ..., {xn, yn}}]` generates a scatter plot with specified coordinates.

## Examples

Plot y values:

```wolfram
ListPlot[{1, 4, 9, 16, 25}]
```

Plot x-y pairs:

```wolfram
ListPlot[{{0, 0}, {1, 1}, {2, 4}, {3, 9}}]
```

Multiple datasets:

```wolfram
ListPlot[{Table[Sin[x], {x, 0, 10, 0.5}], Table[Cos[x], {x, 0, 10, 0.5}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListPlot.html) for more details.*