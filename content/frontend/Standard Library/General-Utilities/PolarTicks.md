---
title: PolarTicks
---

`PolarTicks` is an option for sector charts and polar plots that specifies tick marks for polar axes.

## Examples

Customize polar axis ticks:

```wolfram
PolarPlot[Sin[3 t], {t, 0, Pi}, PolarTicks -> {Automatic, None}]
```

Set specific radial ticks:

```wolfram
PolarPlot[t, {t, 0, 2 Pi}, PolarTicks -> {{0, 1, 2, 3, 4, 5, 6}, Automatic}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolarTicks.html) for more details.*