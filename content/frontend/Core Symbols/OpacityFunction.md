# OpacityFunction

`OpacityFunction` is an option for graphics functions that specifies a function to apply to determine opacity of elements.

## Examples

```wolfram
ListDensityPlot3D[data, OpacityFunction -> (# &)]
```

```wolfram
DensityPlot3D[Sin[x y z], {x, 0, 3}, {y, 0, 3}, {z, 0, 3}, OpacityFunction -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OpacityFunction.html) for more details.*