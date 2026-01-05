# ContourLines

`ContourLines` is an option for contour plots that specifies whether to draw explicit contour lines.

## Examples

Create a contour plot without contour lines:

```wolfram
ContourPlot[Sin[x] Sin[y], {x, -3, 3}, {y, -3, 3}, ContourLines -> False]
```

Show contour lines (default):

```wolfram
ContourPlot[Sin[x] Sin[y], {x, -3, 3}, {y, -3, 3}, ContourLines -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContourLines.html) for more details.*