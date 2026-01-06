---
title: DiscretePlot
---

`DiscretePlot[f, {n, nmax}]` generates a plot of f as a function of n for n=1, ..., nmax.

`DiscretePlot[f, {n, nmin, nmax}]` generates a plot when n runs from nmin to nmax.

`DiscretePlot[f, {n, nmin, nmax, dn}]` uses steps dn.

## Examples

Plot Fibonacci numbers:

```wolfram
DiscretePlot[Fibonacci[n], {n, 1, 20}]
```

With custom styling:

```wolfram
DiscretePlot[n^2, {n, 1, 10}, PlotStyle -> Red, Filling -> Axis]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscretePlot.html) for more details.*