# VectorColorFunction

`VectorColorFunction` is an option for `VectorPlot` and related functions that specifies a function to apply to determine colors of field vectors drawn.

## Examples

Color by magnitude:

```wolfram
VectorPlot[{y, -x}, {x, -2, 2}, {y, -2, 2}, VectorColorFunction -> "Rainbow"]
```

Custom color function:

```wolfram
VectorPlot[{y, -x}, {x, -2, 2}, {y, -2, 2}, 
  VectorColorFunction -> (Hue[#5] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorColorFunction.html) for more details.*