# PlotLabel

`PlotLabel` is an option that specifies an overall title/label for a plot.

## Examples

Add a title to a plot:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi},
  PlotLabel -> "Sine Wave"
]

(* With styling *)
Plot[Exp[-x^2], {x, -3, 3},
  PlotLabel -> Style["Gaussian", Bold, 16]
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlotLabel.html) for more details.*