---
title: ProbabilityScalePlot
---

`ProbabilityScalePlot[{x1, x2, ...}]` generates a normal probability plot of the samples.

## Examples

Probability scale plot:

```wolfram
data = RandomVariate[NormalDistribution[], 100];
ProbabilityScalePlot[data]
```

For different distribution:

```wolfram
ProbabilityScalePlot[data, "Exponential"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ProbabilityScalePlot.html) for more details.