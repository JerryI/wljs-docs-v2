---
title: PhaseRange
---

`PhaseRange` is an option to `BodePlot` and `NicholsPlot` that specifies the phase range.

## Examples

```wolfram
BodePlot[TransferFunctionModel[1/(s + 1), s], PhaseRange -> {-180, 0}]
```

```wolfram
NicholsPlot[sys, PhaseRange -> {-360, 0}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PhaseRange.html) for more details.*