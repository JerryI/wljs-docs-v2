# StreamColorFunction

`StreamColorFunction` is an option for `StreamPlot` and related functions that specifies a function to apply to determine colors along streamlines.

This option allows customizing the coloring of stream lines based on field properties.

## Examples

```wolfram
StreamPlot[{-y, x}, {x, -3, 3}, {y, -3, 3}, 
  StreamColorFunction -> "Rainbow"]
```

```wolfram
StreamPlot[{y, -x}, {x, -2, 2}, {y, -2, 2}, 
  StreamColorFunction -> (Hue[#3] &)]
```

```wolfram
StreamPlot[{1, x + y}, {x, -2, 2}, {y, -2, 2}, 
  StreamColorFunction -> Function[{x, y, vx, vy, n}, Hue[n]]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StreamColorFunction.html) for more details.*