---
title: SmoothPointDensity
---

`SmoothPointDensity[pdata]` estimates the point density function μ(x) for point data pdata.

`SmoothPointDensity[pdata, bw]` estimates the density for point data pdata with bandwidth bw.

`SmoothPointDensity[pdata, bw, ker]` estimates the density for point data pdata with bandwidth bw and smoothing kernel ker.

`SmoothPointDensity[bdata, ...]` estimates the point density function μ(x) for binned data bdata.

`SmoothPointDensity[pproc, ...]` computes the density function μ(x) for point process pproc.

## Examples

```wolfram
pts = RandomPointConfiguration[PoissonPointProcess[100], Rectangle[]];
SmoothPointDensity[pts]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SmoothPointDensity.html) for more details.