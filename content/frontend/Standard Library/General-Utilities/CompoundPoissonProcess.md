---
title: CompoundPoissonProcess
---

`CompoundPoissonProcess[λ, jdist]` represents a compound Poisson process with rate parameter λ and jump size distribution jdist.

## Examples

Create a compound Poisson process:

```wolfram
proc = CompoundPoissonProcess[2, ExponentialDistribution[1]]
```

Sample a path:

```wolfram
RandomFunction[CompoundPoissonProcess[1, NormalDistribution[]], {0, 10}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompoundPoissonProcess.html) for more details.*