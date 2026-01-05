# PlotStyle

`PlotStyle` is an option that specifies styles for plot elements. Use colors, thickness, dashing, or lists for multiple curves.

## Examples

Style plot curves:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi},
  PlotStyle -> {Red, Thick}
]

(* Multiple curves with different styles *)
Plot[{Sin[x], Cos[x]}, {x, 0, 2 Pi},
  PlotStyle -> {{Blue, Thick}, {Red, Dashed}}
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlotStyle.html) for more details.*