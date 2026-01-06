# Thickness

`Thickness[r]` is a graphics directive specifying that lines are to be drawn with thickness `r` (as a fraction of the plot width).

## Examples

Draw lines with different thicknesses:

```wolfram
Graphics[{
  Thickness[0.01], Line[{{0, 0}, {1, 0}}],
  Thickness[0.02], Line[{{0, 0.2}, {1, 0.2}}],
  Thickness[0.05], Line[{{0, 0.5}, {1, 0.5}}]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Thickness.html) for more details.*