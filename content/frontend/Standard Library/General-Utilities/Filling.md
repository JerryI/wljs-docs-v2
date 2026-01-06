---
title: Filling
---

`Filling` is an option for `ListPlot`, `Plot`, `Plot3D`, and related functions that specifies what filling to add under points, curves, and surfaces.

## Examples

Fill to the axis:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Filling -> Axis]
```

Fill to bottom:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Filling -> Bottom]
```

Fill between curves:

```wolfram
Plot[{Sin[x], Cos[x]}, {x, 0, 2 Pi}, Filling -> {1 -> {2}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Filling.html) for more details.*