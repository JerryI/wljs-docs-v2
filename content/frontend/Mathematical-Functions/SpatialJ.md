---
title: SpatialJ
---

`SpatialJ[pdata, r]` estimates the J function J(r) for point data *pdata* at radius *r*.

- `SpatialJ[pproc, r]` computes J(r) for the point process *pproc*.
- `SpatialJ[bdata, r]` computes J(r) for binned data *bdata*.
- `SpatialJ[pspec]` generates the function J that can be applied repeatedly to different radii *r*.

## Examples

```wolfram
pts = SpatialPointData[RandomPoint[Disk[], 100]];
SpatialJ[pts, 0.1]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpatialJ.html) for more details.