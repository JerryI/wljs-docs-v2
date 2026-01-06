# FillingStyle

`FillingStyle` is an option for `ListPlot`, `Plot`, `Plot3D`, and related functions that specifies the default style of filling to be used.

## Examples

Use a colored filling style:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Filling -> Bottom, FillingStyle -> LightBlue]
```

Use opacity in the filling:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Filling -> Bottom, FillingStyle -> Opacity[0.5, Red]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FillingStyle.html) for more details.*