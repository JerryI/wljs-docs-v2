# PointDensityFunction

`PointDensityFunction[...]` represents a function whose values give the density at a given location.

## Examples

```wolfram
pdf = PointDensityFunction[RandomPoint[Disk[], 100]];
pdf[{0.5, 0.5}]
```

```wolfram
DensityPlot[pdf[{x, y}], {x, -1, 1}, {y, -1, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PointDensityFunction.html) for more details.*