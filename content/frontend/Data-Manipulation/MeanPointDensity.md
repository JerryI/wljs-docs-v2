---
title: MeanPointDensity
---

`MeanPointDensity[pdata]` estimates the mean point density λ from point data pdata in the observation region reg.

`MeanPointDensity[bdata]` estimates the mean point density λ from binned data bdata.

`MeanPointDensity[pproc]` computes the mean point density λ for point process pproc.

## Examples

Estimate the mean point density from random points:

```wolfram
points = RandomPoint[Disk[], 100];
MeanPointDensity[PointData[points, Disk[]]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeanPointDensity.html) for more details.