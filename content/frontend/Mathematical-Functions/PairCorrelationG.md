---
title: PairCorrelationG
---

`PairCorrelationG[pdata, r]` estimates the pair correlation function g(r) for point data pdata at radius r.

- `PairCorrelationG[pproc, r]` computes g(r) for the point process pproc.
- `PairCorrelationG[bdata, r]` computes g(r) for binned data bdata.
- `PairCorrelationG[pspec]` generates the function g that can be applied repeatedly to different radii r.

## Examples

```wolfram
PairCorrelationG[RandomPointConfiguration[PoissonPointProcess[1], Rectangle[]], 0.5]
```

```wolfram
PairCorrelationG[PointProcessEstimator[pts, Rectangle[]], 0.3]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PairCorrelationG.html) for more details.