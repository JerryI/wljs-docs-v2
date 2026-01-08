---
title: DataDistribution
---

`DataDistribution[ddist, ...]` represents a probability distribution of type ddist, estimated from a set of data.

## Examples

Estimate distribution from data:

```wolfram
data = RandomVariate[NormalDistribution[], 1000];
dist = SmoothKernelDistribution[data]
(* DataDistribution["Smooth Kernel", ...] *)
```

Use the estimated distribution:

```wolfram
PDF[dist, 0]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DataDistribution.html) for more details.