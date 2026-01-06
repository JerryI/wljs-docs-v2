---
title: RootLocusPlot
---

`RootLocusPlot[lsys, {k, kmin, kmax}]` generates a root locus plot of a linear time-invariant system lsys as the parameter k ranges from kmin to kmax.

## Examples

```wolfram
sys = TransferFunctionModel[1/(s^2 + s + 1), s];
RootLocusPlot[sys, {k, 0, 10}]
```

```wolfram
RootLocusPlot[TransferFunctionModel[k/((s + 1)(s + 2)), s], {k, 0, 20}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RootLocusPlot.html) for more details.*