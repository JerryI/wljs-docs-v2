---
title: LightingAngle
---

`LightingAngle` is an option for `ReliefPlot` and related functions that specifies the angle from which simulated illumination is taken to come.

## Examples

```wolfram
ReliefPlot[Table[Sin[x] Cos[y], {x, 0, 4 Pi, 0.1}, {y, 0, 4 Pi, 0.1}], LightingAngle -> 45]
```

```wolfram
ReliefPlot[data, LightingAngle -> {45, 30}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LightingAngle.html) for more details.*