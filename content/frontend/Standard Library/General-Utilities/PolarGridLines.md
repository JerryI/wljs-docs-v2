# PolarGridLines

`PolarGridLines` is an option for sector charts and polar plots that specifies polar grid lines.

## Examples

Add polar grid lines to a plot:

```wolfram
PolarPlot[Sin[3 θ], {θ, 0, 2 Pi}, PolarGridLines -> Automatic]
```

Custom radial grid lines:

```wolfram
PolarPlot[θ/Pi, {θ, 0, 4 Pi}, 
  PolarGridLines -> {{0.5, 1, 1.5, 2}, Automatic}]
```

In a sector chart:

```wolfram
SectorChart[{{1, 2}, {2, 3}, {3, 1}}, PolarGridLines -> Automatic]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolarGridLines.html) for more details.*