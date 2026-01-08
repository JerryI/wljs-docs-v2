---
title: ComplexRegionPlot
---

`ComplexRegionPlot[pred, {z, zmin, zmax}]` makes a plot showing the region in the complex plane for which pred is True.

`ComplexRegionPlot[{pred1, pred2, ...}, {z, zmin, zmax}]` plots regions given by multiple predicates.

## Examples

Plot a region in the complex plane:

```wolfram
ComplexRegionPlot[Abs[z] < 1, {z, -2 - 2 I, 2 + 2 I}]
```

Plot multiple regions:

```wolfram
ComplexRegionPlot[{Re[z] > 0, Im[z] > 0}, {z, -2 - 2 I, 2 + 2 I}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ComplexRegionPlot.html) for more details.