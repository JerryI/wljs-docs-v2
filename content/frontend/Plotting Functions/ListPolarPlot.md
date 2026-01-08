---
title: ListPolarPlot
---

`ListPolarPlot[{r1, r2, ...}]` plots points equally spaced in angle at radii ri.

## Examples

Polar plot of radii:

```wolfram
ListPolarPlot[Table[Sin[3 θ], {θ, 0, 2 Pi, 0.1}]]
```

With explicit angles:

```wolfram
ListPolarPlot[Table[{θ, 1 + Cos[θ]}, {θ, 0, 2 Pi, 0.1}]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListPolarPlot.html) for more details.