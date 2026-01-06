# CosineWindow

`CosineWindow[x]` represents a cosine window function of x.

`CosineWindow[x, α]` uses the exponent α.

## Examples

Plot a cosine window:

```wolfram
Plot[CosineWindow[x], {x, -1, 1}]
```

Apply to signal processing:

```wolfram
data = Table[Sin[2 Pi t/10], {t, 0, 99}];
ListLinePlot[data * Table[CosineWindow[t/50 - 1], {t, 0, 99}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CosineWindow.html) for more details.*