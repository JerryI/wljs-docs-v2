---
title: EmptySpaceF
---

`EmptySpaceF[pdata, r]` estimates the empty space function F(r) for point data pdata at radius r.

`EmptySpaceF[pproc, r]` computes F(r) for point process pproc.

`EmptySpaceF[bdata, r]` computes F(r) for binned data bdata.

`EmptySpaceF[pspec]` generates the function F that can be applied repeatedly to different radii r.

## Examples

Compute empty space function:

```wolfram
EmptySpaceF[RandomPointConfiguration[PoissonPointProcess[1], Disk[]], 0.5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EmptySpaceF.html) for more details.*