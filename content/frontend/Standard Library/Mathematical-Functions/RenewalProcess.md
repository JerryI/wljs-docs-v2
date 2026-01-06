---
title: RenewalProcess
---

`RenewalProcess[rdist]` represents a renewal process with interarrival times distributed according to rdist.

## Examples

```wolfram
proc = RenewalProcess[ExponentialDistribution[1]]
```

```wolfram
RandomFunction[proc, {0, 10}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RenewalProcess.html) for more details.*