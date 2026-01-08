---
title: BesagL
---

`BesagL[pdata, r]` estimates Besag's L function L(r) for point data pdata at radius r.

`BesagL[pproc, r]` computes L(r) for the point process pproc.

`BesagL[bdata, r]` computes L(r) for binned data bdata.

## Examples

Compute L function:

```wolfram
pts = RandomPointConfiguration[PoissonPointProcess[1], Rectangle[]];
BesagL[pts, 0.1]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BesagL.html) for more details.