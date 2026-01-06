# ListPointPlot3D

`ListPointPlot3D[{{x1, y1, z1}, {x2, y2, z2}, ...}]` generates a 3D scatter plot of points with coordinates {x_i, y_i, z_i}.

`ListPointPlot3D[{data1, data2, ...}]` plots several collections of points, by default in different colors.

## Examples

3D scatter plot:

```wolfram
points = Table[{Cos[t], Sin[t], t/10}, {t, 0, 4 Pi, 0.2}];
ListPointPlot3D[points]
```

Multiple datasets:

```wolfram
ListPointPlot3D[{RandomReal[1, {50, 3}], RandomReal[{1, 2}, {50, 3}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListPointPlot3D.html) for more details.*