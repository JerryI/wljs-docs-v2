# RotateLabel

`RotateLabel` is an option for graphics and related functions that specifies whether labels on vertical frame axes should be rotated to be vertical.

When `True`, y-axis labels are rotated 90 degrees for better readability.

## Examples

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Frame -> True, RotateLabel -> True, 
  FrameLabel -> {"x", "Sin(x)"}]
```

```wolfram
Plot[x^2, {x, -2, 2}, Frame -> True, RotateLabel -> False, 
  FrameLabel -> {"x", "y"}]
```

```wolfram
ListPlot[Range[10]^2, Frame -> True, RotateLabel -> True]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RotateLabel.html) for more details.*