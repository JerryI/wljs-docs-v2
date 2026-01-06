# DotDashed

`DotDashed` is a graphics directive specifying that lines that follow should be drawn dot-dashed.

## Examples

Draw a dot-dashed line:

```wolfram
Graphics[{DotDashed, Line[{{0, 0}, {1, 1}}]}]
```

In plots:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, PlotStyle -> DotDashed]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DotDashed.html) for more details.*