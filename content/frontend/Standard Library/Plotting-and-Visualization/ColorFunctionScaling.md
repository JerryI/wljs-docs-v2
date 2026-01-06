# ColorFunctionScaling

`ColorFunctionScaling` is an option for graphics functions that specifies whether arguments supplied to a color function should be scaled to lie between 0 and 1.

## Examples

Use unscaled values in a color function:

```wolfram
Plot3D[Sin[x y], {x, 0, 3}, {y, 0, 3}, ColorFunction -> Function[{x, y, z}, Hue[z]], ColorFunctionScaling -> False]
```

With default scaling (True), values are normalized:

```wolfram
DensityPlot[x + y, {x, 0, 10}, {y, 0, 10}, ColorFunctionScaling -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorFunctionScaling.html) for more details.*