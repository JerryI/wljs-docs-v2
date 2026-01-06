---
title: RegionBoundaryStyle
---

`RegionBoundaryStyle` is an option for plotting functions that specifies the boundary style for the region over which the plot is being drawn.

This option controls how the boundary of a region is rendered in plots.

## Examples

```wolfram
RegionPlot[x^2 + y^2 < 1, {x, -1, 1}, {y, -1, 1}, 
  RegionBoundaryStyle -> {Red, Thick}]
```

```wolfram
Plot3D[Sin[x*y], {x, y} ∈ Disk[], RegionBoundaryStyle -> Blue]
```

```wolfram
RegionPlot[Disk[], RegionBoundaryStyle -> Dashed]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionBoundaryStyle.html) for more details.*