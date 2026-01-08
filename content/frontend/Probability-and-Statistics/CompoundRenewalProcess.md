---
title: CompoundRenewalProcess
---

`CompoundRenewalProcess[rdist, jdist]` represents a compound renewal process with renewal-time distribution rdist and jump size distribution jdist.

## Examples

Create a compound renewal process:

```wolfram
proc = CompoundRenewalProcess[ExponentialDistribution[1], NormalDistribution[]]
```

Sample a path:

```wolfram
RandomFunction[CompoundRenewalProcess[ExponentialDistribution[2], UniformDistribution[]], {0, 10}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompoundRenewalProcess.html) for more details.*