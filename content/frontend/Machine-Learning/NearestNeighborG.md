---
title: NearestNeighborG
---

`NearestNeighborG[pdata,r]` estimates the nearest neighbor function G(r) at radius r in the point data pdata.

`NearestNeighborG[pproc,r]` computes G(r) for the point process pproc.

`NearestNeighborG[bdata,r]` computes G(r) for binned data bdata.

`NearestNeighborG[pspec]` generates the function G that can be applied repeatedly to different radii r.

## Examples

Estimate the nearest neighbor function for random points:

```wolfram
pts = RandomReal[1, {100, 2}];
NearestNeighborG[pts, 0.1]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NearestNeighborG.html) for more details.