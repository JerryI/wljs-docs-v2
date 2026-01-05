# ColorDataFunction

`ColorDataFunction[range, ...]` is a function that represents a color scheme.

## Examples

Get a color scheme and apply it:

```wolfram
cf = ColorData["Rainbow"];
cf[0.5]
(* RGBColor[0., 1., 0.] *)
```

Use in a plot:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, ColorFunction -> ColorData["Rainbow"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorDataFunction.html) for more details.*