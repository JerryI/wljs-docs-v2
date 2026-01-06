# VectorColorFunctionScaling

`VectorColorFunctionScaling` is an option for graphics functions which specifies whether arguments supplied to a vector color function should be scaled to lie between 0 and 1.

## Examples

Enable scaling (default):

```wolfram
VectorPlot[{y, -x}, {x, -3, 3}, {y, -3, 3}, 
  VectorColorFunctionScaling -> True]
```

Disable scaling:

```wolfram
VectorPlot[{y, -x}, {x, -3, 3}, {y, -3, 3}, 
  VectorColorFunctionScaling -> False]
```

With custom color function:

```wolfram
VectorPlot[{y, -x}, {x, -3, 3}, {y, -3, 3}, 
  VectorColorFunction -> "Rainbow", 
  VectorColorFunctionScaling -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorColorFunctionScaling.html) for more details.*