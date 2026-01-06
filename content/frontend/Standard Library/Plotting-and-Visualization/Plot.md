---
title: Plot
---

`Plot[f, {x, xmin, xmax}]` generates a plot of f as a function of x from xmin to xmax.

`Plot[{f1, f2, ...}, {x, xmin, xmax}]` plots several functions fi.

## Examples

Plot a sine function:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}]
```

Plot multiple functions:

```wolfram
Plot[{Sin[x], Cos[x]}, {x, 0, 2 Pi}]
```

Plot with styling:

```wolfram
Plot[x^2, {x, -2, 2}, PlotStyle -> Red]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Plot.html) for more details.*