# StreamColorFunctionScaling

`StreamColorFunctionScaling` is an option for graphics functions that specifies whether arguments supplied to a stream color function should be scaled to lie between 0 and 1.

## Examples

```wolfram
StreamPlot[{y, -x}, {x, -3, 3}, {y, -3, 3}, 
  StreamColorFunction -> (Hue[#] &), 
  StreamColorFunctionScaling -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StreamColorFunctionScaling.html) for more details.*